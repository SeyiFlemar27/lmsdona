import { NextRequest } from "next/server";
import { getStore, generateId } from "@/lib/store";
import { requireAuth, requireRole } from "@/lib/auth";
import type { Role } from "@/lib/types";

// Get notices relevant to current user or create notices (Admin/Teacher)
export async function GET(req: NextRequest) {
  const user = requireAuth(req);
  const store = getStore();

  const notices = store.notices.filter((n) => {
    if (n.targetRoles && !n.targetRoles.includes(user.role)) return false;
    return true;
  });

  return Response.json({ notices });
}

export async function POST(req: NextRequest) {
  const creator = requireRole(req, ["ADMIN", "TEACHER"]);
  const body = await req.json().catch(() => null);

  if (!body || typeof body.title !== "string" || typeof body.content !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const store = getStore();
  const now = new Date();

  const noticeRoles: Role[] | undefined = Array.isArray(body.targetRoles)
    ? body.targetRoles.filter((r: Role) => ["ADMIN", "TEACHER", "STUDENT"].includes(r))
    : undefined;

  const notice = {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    title: body.title,
    content: body.content,
    createdById: creator.id,
    targetRoles: noticeRoles,
    targetClassIds: undefined,
    targetCourseIds: undefined,
  };

  store.notices.push(notice);

  // Create notifications for targeted users
  const recipients = store.users.filter((u) => !noticeRoles || noticeRoles.includes(u.role));
  for (const u of recipients) {
    store.notifications.push({
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      userId: u.id,
      noticeId: notice.id,
      type: "NOTICE",
      title: notice.title,
      content: notice.content,
      isRead: false,
    });
  }

  return Response.json(notice, { status: 201 });
}
