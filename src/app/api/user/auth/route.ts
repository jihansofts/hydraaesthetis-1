import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "@/model/UserModel";
import { connectDB } from "@/lib/mongoose";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const user = await UserModel.findOne({ email }).exec();
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // Set cookie
    const res = NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          role: user.role,
          name: user.name,
          email: user.email,
        },
        token,
      },
      {
        status: 200,
      }
    );
    res.cookies.set("token", token, {
      httpOnly: true, // Can't be read by JS
      secure: process.env.NODE_ENV === "production", // only https in prod
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error },
      { status: 500 }
    );
  }
}
