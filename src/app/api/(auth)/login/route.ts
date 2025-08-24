import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const JWT_SECRET = process.env.JWT_SECRET_KEY;
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    if (!JWT_SECRET) {
      return NextResponse.json({ error: "No jwt secret key" }, { status: 401 });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET as string,
      {
        expiresIn: (process.env.JWT_EXPIRES_IN ??
          "7d") as SignOptions["expiresIn"],
      }
    );

    const res = NextResponse.json({ success: true });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
