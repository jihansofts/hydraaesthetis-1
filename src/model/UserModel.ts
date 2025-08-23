// models/User.ts
import mongoose, { Document, Schema, Model } from "mongoose";

export type UserRole = "admin" | "moderator";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "moderator"], default: "moderator" },
  },
  { timestamps: true, versionKey: false }
);

export const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserModel;
