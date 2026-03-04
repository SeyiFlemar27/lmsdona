import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireRole } from "@/lib/auth";

interface RouteParams {
  params: { id: string };
}

export async function POST(req: NextRequest, { params }: RouteParams) {
  const student = requireRole(req, ["STUDENT"]);
  const body = await req.json().catch(() => null);

  if (!body || !Array.isArray(body.answers)) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const quiz = store.quizzes.find((q) => q.id === params.id);
  if (!quiz) return Response.json({ message: "Quiz not found" }, { status: 404 });

  // Ensure student is enrolled in the course
  const enrolled = store.enrollments.some((e) => e.studentId === student.id && e.courseId === quiz.courseId);
  if (!enrolled) return Response.json({ message: "Forbidden" }, { status: 403 });

  const questions = store.questions.filter((q) => q.quizId === quiz.id);

  let obtainedMarks = 0;

  for (const ans of body.answers as { questionId: string; selectedOptionIndex?: number; answerText?: string }[]) {
    const q = questions.find((qq) => qq.id === ans.questionId);
    if (!q) continue;

    if ((q.type === "MCQ" || q.type === "TRUE_FALSE") && typeof q.correctOptionIndex === "number") {
      if (ans.selectedOptionIndex === q.correctOptionIndex) {
        obtainedMarks += q.maxMarks;
      }
    }
    // SHORT/LONG answers require manual grading; give 0 for now
  }

  const now = new Date();
  const attempt = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    quizId: quiz.id,
    studentId: student.id,
    answers: body.answers,
    obtainedMarks,
    completedAt: now,
  };

  store.quizAttempts.push(attempt);

  return Response.json(attempt, { status: 201 });
}
