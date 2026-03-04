import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireRole } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const student = requireRole(req, ["STUDENT"]);
  const store = getStore();

  const enrollments = store.enrollments.filter((e) => e.studentId === student.id);
  const courses = store.courses.filter((c) => enrollments.some((e) => e.courseId === c.id));

  return Response.json({
    enrollments,
    courses,
  });
}
