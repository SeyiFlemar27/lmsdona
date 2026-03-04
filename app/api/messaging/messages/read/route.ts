import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireAuth } from "@/lib/auth";

// Mark all messages in a conversation as read for current user
export async function POST(req: NextRequest) {
  const user = requireAuth(req);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.conversationId !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const conv = store.conversations.find((c) => c.id === body.conversationId);
  if (!conv || !conv.participantIds.includes(user.id)) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  store.messages
    .filter((m) => m.conversationId === conv.id)
    .forEach((m) => {
      if (!m.readByIds.includes(user.id)) {
        m.readByIds.push(user.id);
      }
    });

  return Response.json({ message: "Marked as read" });
}
