import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireRole } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const teacher = requireRole(req, ["TEACHER"]);
  const store = getStore();

  const assignments = store.assignments.filter((a) => {
    const course = store.courses.find((c) => c.id === a.courseId);
    return course?.teacherId === teacher.id;
  });

  return Response.json({ assignments });
}

export async function POST(req: NextRequest) {
  const teacher = requireRole(req, ["TEACHER"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.courseId !== "string" || typeof body.title !== "string" || typeof body.maxMarks !== "number") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const course = store.courses.find((c) => c.id === body.courseId && c.teacherId === teacher.id);
  if (!course) return Response.json({ message: "Course not found" }, { status: 404 });

  const now = new Date();
  const assignment = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    courseId: course.id,
    title: body.title,
    description: typeof body.description === "string" ? body.description : undefined,
    dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
    maxMarks: body.maxMarks,
  };

  store.assignments.push(assignment);

  return Response.json(assignment, { status: 201 });
}
