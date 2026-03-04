import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireRole } from "@/lib/auth";

export async function GET(req: NextRequest) {
  requireRole(req, ["ADMIN"]);
  const store = getStore();

  return Response.json({ courses: store.courses });
}

export async function POST(req: NextRequest) {
  requireRole(req, ["ADMIN"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.title !== "string" || typeof body.description !== "string" || typeof body.teacherId !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const teacher = store.users.find((u) => u.id === body.teacherId && u.role === "TEACHER");

  if (!teacher) {
    return Response.json({ message: "Teacher not found" }, { status: 404 });
  }

  const now = new Date();
  const course = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    title: body.title,
    description: body.description,
    teacherId: teacher.id,
    price: typeof body.price === "number" ? body.price : 0,
    isPublished: !!body.isPublished,
  };

  store.courses.push(course);

  return Response.json(course, { status: 201 });
}
