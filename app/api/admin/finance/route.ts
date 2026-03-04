import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireRole } from "@/lib/auth";

export async function GET(req: NextRequest) {
  requireRole(req, ["ADMIN"]);
  const store = getStore();

  const payments = store.payments;
  const totalIncome = payments.filter((p) => p.status === "COMPLETED").reduce((sum, p) => sum + p.amount, 0);

  return Response.json({
    payments,
    totalIncome,
    expenses: 0,
  });
}
