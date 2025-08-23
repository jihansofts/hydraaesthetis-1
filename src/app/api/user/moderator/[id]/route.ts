import { connectDB } from "@/lib/mongoose";
import { IUser, UserModel } from "@/model/UserModel";
import { requireRoleDynamic } from "@/lib/roleCheck";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

type Context = { params?: Record<string, string> | undefined };

export const PATCH = requireRoleDynamic(["admin"])(
  async (req: NextRequest, context: Context) => {
    await connectDB();
    const id = context.params?.id;
    const { name, email, password } = await req.json();

    const updateData: Partial<IUser> = { name, email };

    if (password) {
      // Hash password before updating
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    await UserModel.findByIdAndUpdate(id, updateData);

    return NextResponse.json({
      success: true,
      message: "successfully updated",
      status: 200,
    });
  }
);

export const DELETE = requireRoleDynamic(["admin"])(
  async (req: NextRequest, context: Context) => {
    await connectDB();

    const id = context.params?.id;

    // Prevent deleting yourself
    if (id === context.params?.id) {
      return NextResponse.json(
        { error: "Cannot delete your own admin account" },
        { status: 403 }
      );
    }

    // Find the target user
    const userToDelete = await UserModel.findById(id);
    if (!userToDelete) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Prevent deleting another admin
    if (userToDelete.role === "admin") {
      return NextResponse.json(
        { error: "Cannot delete another admin" },
        { status: 403 }
      );
    }

    // Delete moderator
    await UserModel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Moderator deleted successfully",
    });
  }
);
