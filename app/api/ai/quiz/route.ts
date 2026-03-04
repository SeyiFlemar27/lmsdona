import { NextRequest } from "next/server";
import { requireRole } from "@/lib/auth";

// Demo AI quiz generation – returns simple placeholder questions
export async function POST(req: NextRequest) {
  requireRole(req, ["TEACHER"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.topic !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const questions = [
    {
      type: "MCQ",
      text: `Basic question about ${body.topic}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctOptionIndex: 0,
      maxMarks: 1,
    },
  ];

  return Response.json({ questions });
}
