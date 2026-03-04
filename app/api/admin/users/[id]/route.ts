import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireRole } from "@/lib/auth";

interface RouteParams {
  params: { id: string };
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  requireRole(req, ["ADMIN"]);
  const body = await req.json().catch(() => null);

  const store = getStore();
  const user = store.users.find((u) => u.id === params.id);

  if (!user) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  if (body && typeof body.name === "string") {
    user.name = body.name;
  }

  if (body && typeof body.isSuspended === "boolean") {
    user.isSuspended = body.isSuspended;
  }

  user.updatedAt = new Date();

  return Response.json({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    isSuspended: user.isSuspended,
  });
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  requireRole(req, ["ADMIN"]);
  const store = getStore();
  const index = store.users.findIndex((u) => u.id === params.id);

  if (index === -1) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  store.users.splice(index, 1);

  return Response.json({ message: "User deleted" });
}
