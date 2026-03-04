import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireAuth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const user = requireAuth(req);

  return Response.json({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    avatarUrl: user.avatarUrl ?? null,
  });
}

export async function PATCH(req: NextRequest) {
  const user = requireAuth(req);
  const body = await req.json().catch(() => null);

  if (!body || (typeof body.name !== "string" && typeof body.avatarUrl !== "string")) {
    return Response.json({ message: "Nothing to update" }, { status: 400 });
  }

  const store = getStore();
  const existing = store.users.find((u) => u.id === user.id);
  if (!existing) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  if (typeof body.name === "string") {
    existing.name = body.name;
  }
  if (typeof body.avatarUrl === "string") {
    existing.avatarUrl = body.avatarUrl;
  }
  existing.updatedAt = new Date();

  return Response.json({
    id: existing.id,
    email: existing.email,
    name: existing.name,
    role: existing.role,
    avatarUrl: existing.avatarUrl ?? null,
  });
}
