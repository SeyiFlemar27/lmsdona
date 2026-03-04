import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireRole } from "@/lib/auth";

// Basic analytics: course completion and learning time per student
export async function GET(req: NextRequest) {
  const user = requireRole(req, ["ADMIN", "TEACHER", "STUDENT"]);
  const store = getStore();

  if (user.role === "STUDENT") {
    const records = store.progressRecords.filter((p) => p.studentId === user.id);
    return Response.json({ records });
  }

  // Admin/Teacher: aggregate simple stats
  const byCourse: Record<string, { courseId: string; avgCompletion: number; studentCount: number }> = {};

  for (const p of store.progressRecords) {
    if (!byCourse[p.courseId]) {
      byCourse[p.courseId] = { courseId: p.courseId, avgCompletion: 0, studentCount: 0 };
    }
    const entry = byCourse[p.courseId];
    entry.avgCompletion += p.completedPercent;
    entry.studentCount += 1;
  }

  const courses = Object.values(byCourse).map((c) => ({
    courseId: c.courseId,
    avgCompletion: c.studentCount ? c.avgCompletion / c.studentCount : 0,
    studentCount: c.studentCount,
  }));

  return Response.json({ courses });
}
