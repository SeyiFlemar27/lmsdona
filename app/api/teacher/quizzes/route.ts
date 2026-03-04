import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireRole } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const teacher = requireRole(req, ["TEACHER"]);
  const store = getStore();

  const quizzes = store.quizzes.filter((q) => {
    const course = store.courses.find((c) => c.id === q.courseId);
    return course?.teacherId === teacher.id;
  });

  return Response.json({ quizzes });
}

export async function POST(req: NextRequest) {
  const teacher = requireRole(req, ["TEACHER"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.courseId !== "string" || typeof body.title !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const course = store.courses.find((c) => c.id === body.courseId && c.teacherId === teacher.id);
  if (!course) {
    return Response.json({ message: "Course not found" }, { status: 404 });
  }

  const now = new Date();
  const quiz = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    courseId: course.id,
    title: body.title,
    description: typeof body.description === "string" ? body.description : undefined,
    durationMinutes: typeof body.durationMinutes === "number" ? body.durationMinutes : 30,
    totalMarks: 0,
  };

  store.quizzes.push(quiz);

  return Response.json(quiz, { status: 201 });
}
