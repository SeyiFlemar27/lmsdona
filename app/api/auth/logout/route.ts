import { NextRequest } from "next/server";
import { clearSessionCookie, destroySession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie") ?? "";
  const match = cookieHeader.match(/lms_session_id=([^;]+)/);
  const sessionId = match?.[1];

  if (sessionId) {
    destroySession(sessionId);
  }

  clearSessionCookie();

  return Response.json({ message: "Logged out" });
}
