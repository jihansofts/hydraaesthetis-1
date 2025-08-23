// models/Order.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ICartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface IUserDetail {
  name: string;
  email: string;
  phone: string;
  date: string;
}

export interface IOrder extends Document {
  paypalOrderId: string;
  cartItems: ICartItem[];
  userDetail: IUserDetail;
  total: number;
  status: "PENDING" | "PAID" | "CANCELLED";
}

const OrderSchema = new Schema<IOrder>(
  {
    paypalOrderId: { type: String, required: true },
    cartItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    userDetail: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
      date: { type: String },
    },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["PENDING", "PAID", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);

// import mongoose, { Schema, Document } from "mongoose";

// export interface IOrder extends Document {
//   paypalOrderId: string;
//   cartItems: { name: string; price: number; quantity: number }[];
//   userDetails: { name: string; email: string; address?: string };
//   total: number;
//   status: "PENDING" | "PAID" | "CANCELLED";
// }

// const OrderSchema = new Schema<IOrder>(
//   {
//     paypalOrderId: { type: String },
//     cartItems: [
//       {
//         name: String,
//         price: Number,
//         quantity: Number,
//       },
//     ],
//     userDetails: {
//       name: String,
//       email: String,
//       address: String,
//     },
//     total: Number,
//     status: {
//       type: String,
//       enum: ["PENDING", "PAID", "CANCELLED"],
//       default: "PENDING",
//     },
//   },
//   { timestamps: true, versionKey: false }
// );

// export default mongoose.models.Order ||
//   mongoose.model<IOrder>("Order", OrderSchema);
