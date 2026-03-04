import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireAuth } from "@/lib/auth";

// List conversations for current user and create direct conversations
export async function GET(req: NextRequest) {
  const user = requireAuth(req);
  const store = getStore();

  const conversations = store.conversations
    .filter((c) => c.participantIds?.includes(user.id))
    .map((c) => {
      const messages = store.messages.filter((m) => m.conversationId === c.id);
      const lastMessage = messages[messages.length - 1] ?? null;
      const unreadCount = messages.filter((m) => !m.readByIds.includes(user.id)).length;
      return { ...c, lastMessage, unreadCount };
    });

  return Response.json({ conversations });
}

export async function POST(req: NextRequest) {
  const user = requireAuth(req);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.otherUserId !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const other = store.users.find((u) => u.id === body.otherUserId);
  if (!other) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  // Reuse existing DIRECT conversation if present
  let conv = store.conversations.find(
    (c) =>
      c.type === "DIRECT" &&
      c.participantIds.length === 2 &&
      c.participantIds.includes(user.id) &&
      c.participantIds.includes(other.id),
  );

  if (!conv) {
    const now = new Date();
    conv = {
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      type: "DIRECT",
      participantIds: [user.id, other.id],
      classId: undefined,
      courseId: undefined,
    };
    store.conversations.push(conv);
  }

  return Response.json(conv, { status: 201 });
}
