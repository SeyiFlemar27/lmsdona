import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireAuth } from "@/lib/auth";

// Send a message into a conversation and list messages (by query param)
export async function GET(req: NextRequest) {
  const user = requireAuth(req);
  const store = getStore();

  const conversationId = req.nextUrl.searchParams.get("conversationId");
  if (!conversationId) {
    return Response.json({ message: "conversationId is required" }, { status: 400 });
  }

  const conv = store.conversations.find((c) => c.id === conversationId);
  if (!conv || !conv.participantIds.includes(user.id)) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  const messages = store.messages.filter((m) => m.conversationId === conversationId);
  return Response.json({ messages });
}

export async function POST(req: NextRequest) {
  const user = requireAuth(req);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.conversationId !== "string" || typeof body.content !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const conv = store.conversations.find((c) => c.id === body.conversationId);

  if (!conv || !conv.participantIds.includes(user.id)) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  const now = new Date();
  const msg = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    conversationId: conv.id,
    senderId: user.id,
    content: body.content,
    attachmentUrl: typeof body.attachmentUrl === "string" ? body.attachmentUrl : undefined,
    readByIds: [user.id],
  };

  store.messages.push(msg);
  conv.updatedAt = now;

  return Response.json(msg, { status: 201 });
}
