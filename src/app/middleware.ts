import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const runtime = "nodejs"; // <-- Add this line

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.redirect(new URL("/login", req.url));

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!, {
        algorithms: ["HS256"],
      }) as { role: string };
      if (!["admin", "moderator"].includes(decoded.role)) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    } catch (err) {
      console.error("JWT verification error:", err);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
