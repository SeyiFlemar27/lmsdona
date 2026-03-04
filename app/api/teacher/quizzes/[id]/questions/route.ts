import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireRole } from "@/lib/auth";

interface RouteParams {
  params: { id: string };
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  const teacher = requireRole(req, ["TEACHER"]);
  const store = getStore();

  const quiz = store.quizzes.find((q) => q.id === params.id);
  if (!quiz) return Response.json({ message: "Quiz not found" }, { status: 404 });

  const course = store.courses.find((c) => c.id === quiz.courseId && c.teacherId === teacher.id);
  if (!course) return Response.json({ message: "Forbidden" }, { status: 403 });

  const questions = store.questions.filter((q) => q.quizId === quiz.id);
  return Response.json({ questions });
}

export async function POST(req: NextRequest, { params }: RouteParams) {
  const teacher = requireRole(req, ["TEACHER"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.text !== "string" || typeof body.type !== "string" || typeof body.maxMarks !== "number") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const quiz = store.quizzes.find((q) => q.id === params.id);
  if (!quiz) return Response.json({ message: "Quiz not found" }, { status: 404 });

  const course = store.courses.find((c) => c.id === quiz.courseId && c.teacherId === teacher.id);
  if (!course) return Response.json({ message: "Forbidden" }, { status: 403 });

  const now = new Date();
  const question = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    quizId: quiz.id,
    type: body.type,
    text: body.text,
    options: Array.isArray(body.options) ? body.options : undefined,
    correctOptionIndex: typeof body.correctOptionIndex === "number" ? body.correctOptionIndex : undefined,
    maxMarks: body.maxMarks,
  };

  store.questions.push(question);

  // Update total marks
  quiz.totalMarks = store.questions.filter((q) => q.quizId === quiz.id).reduce((sum, q) => sum + q.maxMarks, 0);
  quiz.updatedAt = new Date();

  return Response.json(question, { status: 201 });
}
