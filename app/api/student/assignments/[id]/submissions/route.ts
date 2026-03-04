import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireRole } from "@/lib/auth";

interface RouteParams {
  params: { id: string };
}

export async function POST(req: NextRequest, { params }: RouteParams) {
  const student = requireRole(req, ["STUDENT"]);
  const body = await req.json().catch(() => null);

  if (!body || (typeof body.contentText !== "string" && typeof body.attachmentUrl !== "string")) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const assignment = store.assignments.find((a) => a.id === params.id);
  if (!assignment) return Response.json({ message: "Assignment not found" }, { status: 404 });

  const enrolled = store.enrollments.some((e) => e.studentId === student.id && e.courseId === assignment.courseId);
  if (!enrolled) return Response.json({ message: "Forbidden" }, { status: 403 });

  const now = new Date();
  const submission = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    assignmentId: assignment.id,
    studentId: student.id,
    contentText: typeof body.contentText === "string" ? body.contentText : undefined,
    attachmentUrl: typeof body.attachmentUrl === "string" ? body.attachmentUrl : undefined,
    obtainedMarks: undefined,
    teacherFeedback: undefined,
  };

  store.assignmentSubmissions.push(submission);

  return Response.json(submission, { status: 201 });
}
