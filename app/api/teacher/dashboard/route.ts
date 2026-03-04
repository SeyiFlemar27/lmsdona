import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireRole } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const teacher = requireRole(req, ["TEACHER"]);
  const store = getStore();

  const myCourses = store.courses.filter((c) => c.teacherId === teacher.id);
  const courseIds = myCourses.map((c) => c.id);

  const myEnrollments = store.enrollments.filter((e) => courseIds.includes(e.courseId));
  const uniqueStudentIds = Array.from(new Set(myEnrollments.map((e) => e.studentId)));

  const classesCount = myCourses.length; // placeholder: each course as a "class"

  return Response.json({
    stats: {
      courses: myCourses.length,
      students: uniqueStudentIds.length,
      classes: classesCount,
    },
  });
}
