import { NextRequest } from "next/server";

// Demo-only endpoint: accepts email and always responds success.
// In a real system, this would send a reset link via email.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.email !== "string") {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  return Response.json({ message: "If this email exists, a reset link has been sent." });
}
