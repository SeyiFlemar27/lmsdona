import { createHash, randomBytes } from "crypto";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { getStore } from "./store";
import type { Role, User } from "./types";

const SESSION_COOKIE = "lms_session_id";

interface Session {
  id: string;
  userId: string;
  createdAt: Date;
}

declare global {
  // eslint-disable-next-line no-var
  var __LMS_SESSIONS__: Map<string, Session> | undefined;
}

const sessionStore: Map<string, Session> =
  global.__LMS_SESSIONS__ ?? new Map<string, Session>();

if (!global.__LMS_SESSIONS__) {
  global.__LMS_SESSIONS__ = sessionStore;
}

function hashPasswordRaw(password: string, salt: string): string {
  return createHash("sha256").update(password + salt).digest("hex");
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = hashPasswordRaw(password, salt);
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  // Fallback for demo users where the password may be stored in plain text
  if (!salt || !hash) {
    return password === stored;
  }
  const check = hashPasswordRaw(password, salt);
  return check === hash;
}

export function createSession(userId: string): Session {
  const id = randomBytes(24).toString("hex");
  const session: Session = { id, userId, createdAt: new Date() };
  sessionStore.set(id, session);
  return session;
}

export function destroySession(sessionId: string): void {
  sessionStore.delete(sessionId);
}

export function getUserFromRequest(req: NextRequest): User | null {
  const cookieStore = cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionId) return null;

  const session = sessionStore.get(sessionId);
  if (!session) return null;

  const store = getStore();
  const user = store.users.find((u) => u.id === session.userId);
  if (!user || user.isSuspended) return null;

  return user;
}

export function requireAuth(req: NextRequest): User {
  const user = getUserFromRequest(req);
  if (!user) {
    throw new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  return user;
}

export function requireRole(req: NextRequest, roles: Role[]): User {
  const user = requireAuth(req);
  if (!roles.includes(user.role)) {
    throw new Response(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }
  return user;
}

export function setSessionCookie(sessionId: string) {
  const cookieStore = cookies();
  cookieStore.set(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export function clearSessionCookie() {
  const cookieStore = cookies();
  cookieStore.delete(SESSION_COOKIE);
}
