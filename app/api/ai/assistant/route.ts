import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireRole } from "@/lib/auth";

// Demo AI assistant endpoint – returns a stubbed answer and logs usage
export async function POST(req: NextRequest) {
  const user = requireRole(req, ["STUDENT", "TEACHER", "ADMIN"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.question !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const now = new Date();

  store.usageLogs.push({
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    userId: user.id,
    feature: "AI_ASSISTANT",
    details: body.question.slice(0, 200),
  });

  // Stubbed response – in real app, call external LLM here
  const answer =
    "This is a demo AI assistant response. Connect this endpoint to a real AI service to provide academic answers, quiz generation, and grading assistance.";

  return Response.json({ answer });
}
