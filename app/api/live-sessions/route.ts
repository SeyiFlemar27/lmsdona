import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireRole } from "@/lib/auth";

// List or create live sessions
export async function GET(req: NextRequest) {
  const user = requireRole(req, ["TEACHER", "STUDENT"]);
  const store = getStore();

  let sessions = store.liveSessions;

  if (user.role === "TEACHER") {
    sessions = sessions.filter((s) => s.teacherId === user.id);
  } else if (user.role === "STUDENT") {
    // Sessions for courses the student is enrolled in
    const enrolledCourseIds = store.enrollments.filter((e) => e.studentId === user.id).map((e) => e.courseId);
    sessions = sessions.filter((s) => enrolledCourseIds.includes(s.courseId));
  }

  return Response.json({ sessions });
}

export async function POST(req: NextRequest) {
  const teacher = requireRole(req, ["TEACHER"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.courseId !== "string" || typeof body.scheduledAt !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const course = store.courses.find((c) => c.id === body.courseId && c.teacherId === teacher.id);
  if (!course) return Response.json({ message: "Course not found" }, { status: 404 });

  const now = new Date();
  const session = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    courseId: course.id,
    teacherId: teacher.id,
    scheduledAt: new Date(body.scheduledAt),
    durationMinutes: typeof body.durationMinutes === "number" ? body.durationMinutes : 60,
    joinCode: Math.random().toString(36).slice(2, 8),
  };

  store.liveSessions.push(session);

  return Response.json(session, { status: 201 });
}
