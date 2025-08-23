// lib/auth.ts
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { IUser } from "@/model/UserModel";

interface JwtPayload {
  id: string;
  role: string;
  iat?: number;
  exp?: number;
}

export async function getUserFromToken(): Promise<IUser | null> {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    if (!decoded?.id || !decoded?.role) return null;

    // Return object with user info from token
    return {
      _id: decoded.id,
      role: decoded.role,
    } as IUser;
  } catch (err) {
    console.error("JWT verification error:", err);
    return null;
  }
}
