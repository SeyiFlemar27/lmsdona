import { NextRequest } from "next/server";

// Demo-only endpoint: accepts token + newPassword and always responds success.
// Real implementation would verify token and update stored password.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.token !== "string" || typeof body.newPassword !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  return Response.json({ message: "Password has been reset (demo)." });
}
