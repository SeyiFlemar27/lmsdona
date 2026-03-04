import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { createSession, setSessionCookie, verifyPassword, hashPassword } from "@/lib/auth";
import type { Role } from "@/lib/types";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.email !== "string" || typeof body.password !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const { email, password } = body;
  const store = getStore();

  let user = store.users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  // If user does not exist yet, auto-create based on userType (parent -> STUDENT, teacher -> TEACHER)
  if (!user) {
    const type = typeof body.userType === "string" ? body.userType : "parent";
    const typeToRole: Record<string, Role> = {
      parent: "STUDENT",
      teacher: "TEACHER",
    };

    const role: Role = typeToRole[type] ?? "STUDENT";
    const now = new Date();

    user = {
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      email,
      name: email.split("@")[0] || "User",
      avatarUrl: undefined,
      role,
      passwordHash: hashPassword(password),
      isSuspended: false,
    };

    store.users.push(user);
  }

  if (!user || user.isSuspended) {
    return Response.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const ok = verifyPassword(password, user.passwordHash);
  if (!ok) {
    return Response.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const session = createSession(user.id);
  setSessionCookie(session.id);

  return Response.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      avatarUrl: user.avatarUrl ?? null,
    },
  });
}
