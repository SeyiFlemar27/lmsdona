import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireRole } from "@/lib/auth";

// Validate access to a session by join code
export async function POST(req: NextRequest) {
  const user = requireRole(req, ["TEACHER", "STUDENT"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.joinCode !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const session = store.liveSessions.find((s) => s.joinCode === body.joinCode);
  if (!session) return Response.json({ message: "Session not found" }, { status: 404 });

  if (user.role === "TEACHER" && session.teacherId !== user.id) {
    return Response.json({ message: "Forbidden" }, { status: 403 });
  }

  if (user.role === "STUDENT") {
    const enrolled = store.enrollments.some((e) => e.studentId === user.id && e.courseId === session.courseId);
    if (!enrolled) return Response.json({ message: "Forbidden" }, { status: 403 });
  }

  // In real app, generate secure WebRTC/meeting token here
  return Response.json({
    sessionId: session.id,
    courseId: session.courseId,
    token: "demo-token",
  });
}
