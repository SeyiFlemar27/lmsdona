import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireRole } from "@/lib/auth";

export async function GET(req: NextRequest) {
  requireRole(req, ["ADMIN"]);
  const store = getStore();

  const totalStudents = store.users.filter((u) => u.role === "STUDENT").length;
  const totalTeachers = store.users.filter((u) => u.role === "TEACHER").length;
  const totalCourses = store.courses.length;

  const income = store.payments
    .filter((p) => p.status === "COMPLETED")
    .reduce((sum, p) => sum + p.amount, 0);

  const expenses = 0; // demo placeholder

  return Response.json({
    stats: {
      totalStudents,
      totalTeachers,
      totalCourses,
      income,
      expenses,
    },
  });
}
