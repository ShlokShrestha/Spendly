import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const JWT_SECRET = process.env.JWT_SECRET_KEY;
  if (!JWT_SECRET) {
    return NextResponse.json({ error: "No JWT secret key" }, { status: 500 });
  }
  let token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      email: string;
    };
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, fullName: true, email: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
