import { NextRequest } from "next/server";
import { getStore } from "@/lib/store";
import { requireAuth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const user = requireAuth(req);
  const store = getStore();

  const notifications = store.notifications.filter((n) => n.userId === user.id);
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return Response.json({ notifications, unreadCount });
}

export async function PATCH(req: NextRequest) {
  const user = requireAuth(req);
  const body = await req.json().catch(() => null);

  if (!body || (typeof body.notificationId !== "string" && body.markAll !== true)) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();

  if (body.markAll) {
    store.notifications
      .filter((n) => n.userId === user.id)
      .forEach((n) => {
        n.isRead = true;
        n.updatedAt = new Date();
      });
  } else if (body.notificationId) {
    const n = store.notifications.find((n) => n.id === body.notificationId && n.userId === user.id);
    if (!n) {
      return Response.json({ message: "Not found" }, { status: 404 });
    }
    n.isRead = true;
    n.updatedAt = new Date();
  }

  return Response.json({ message: "Updated" });
}
