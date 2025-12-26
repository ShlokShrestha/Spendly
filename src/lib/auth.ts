import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export function getCurrentUser(req: NextRequest) {
  const JWT_SECRET = process.env.JWT_SECRET_KEY;
  if (!JWT_SECRET) {
    return null;
  }
  try {
    let token = req.cookies.get("token")?.value;
    if (!token) {
      return null;
    }
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
    };
    return decoded.id;
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
}
