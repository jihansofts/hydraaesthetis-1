// app/api/users/create-moderator/route.ts
import { connectDB } from "@/lib/mongoose";
import { UserModel } from "@/model/UserModel";
import { requireRoleStatic } from "@/lib/roleCheck";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = requireRoleStatic(["admin"])(async (req: NextRequest) => {
  await connectDB();

  const body = await req.json();
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const existingUser = await UserModel.findOne({ email: body.email });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  const newUser = await UserModel.create({
    name: body.name,
    email: body.email,
    password: hashedPassword,
    role: "moderator",
  });

  return NextResponse.json(newUser, { status: 201 });
});

export const GET = requireRoleStatic(["admin"])(async () => {
  await connectDB();
  const users = await UserModel.find();
  return NextResponse.json({ users, status: 200 });
});
