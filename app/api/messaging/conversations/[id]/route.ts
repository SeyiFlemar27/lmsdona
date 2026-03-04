import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireAuth } from "@/lib/auth";

interface RouteParams {
  params: { id: string };
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  const user = requireAuth(req);
  const store = getStore();
  const conv = store.conversations.find((c) => c.id === params.id);

  if (!conv || !conv.participantIds.includes(user.id)) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  const messages = store.messages.filter((m) => m.conversationId === conv.id);

  return Response.json({ conversation: conv, messages });
}
