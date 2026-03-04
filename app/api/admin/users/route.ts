import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { hashPassword } from "@/lib/auth";
import { requireRole } from "@/lib/auth";
import type { Role } from "@/lib/types";

export async function GET(req: NextRequest) {
  requireRole(req, ["ADMIN"]);
  const store = getStore();

  const users = store.users.map((u) => ({
    id: u.id,
    email: u.email,
    name: u.name,
    role: u.role,
    isSuspended: u.isSuspended,
  }));

  return Response.json({ users });
}

export async function POST(req: NextRequest) {
  requireRole(req, ["ADMIN"]);
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.email !== "string" ||
    typeof body.name !== "string" ||
    typeof body.password !== "string" ||
    (body.role !== "ADMIN" && body.role !== "TEACHER" && body.role !== "STUDENT")
  ) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const { email, name, password, role } = body as {
    email: string;
    name: string;
    password: string;
    role: Role;
  };

  const store = getStore();

  if (store.users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return Response.json({ message: "Email already in use" }, { status: 409 });
  }

  const now = new Date();
  const user = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    email,
    name,
    role,
    avatarUrl: undefined,
    passwordHash: hashPassword(password),
    isSuspended: false,
  };

  store.users.push(user);

  return Response.json(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      isSuspended: user.isSuspended,
    },
    { status: 201 },
  );
}
