import { NextRequest, NextResponse } from "next/server";
import Order from "@/model/Order";
import { connectDB } from "@/lib/mongoose";
import { requireRoleStatic } from "@/lib/roleCheck";

// Define RouteHandler type to match the handler signature

export const GET = requireRoleStatic(["admin", "moderator"])(
  async (req: NextRequest) => {
    await connectDB();

    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
    const skip = (page - 1) * limit;

    const [orders, total] = await Promise.all([
      Order.find().skip(skip).limit(limit),
      Order.countDocuments(),
    ]);

    return NextResponse.json({
      orders,
      total,
      totalPages: Math.ceil(total / limit),
    });
  }
);

// import { NextRequest, NextResponse } from "next/server";
// import Order from "@/model/Order";
// import { connectDB } from "@/lib/mongoose";
// import { requireRole } from "@/lib/roleCheck";

// type Context = { params?: Record<string, string> | undefined };

// export const GET = requireRole(["admin"])(
//   async (req: NextRequest, context: Context) => {
//     await connectDB();
//     const id = context.params?.id;
//     const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);
//     const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
//     const skip = (page - 1) * limit;

//     const [orders, total] = await Promise.all([
//       Order.find().skip(skip).limit(limit),
//       Order.countDocuments(),
//     ]);

//     return NextResponse.json({
//       id,
//       orders,
//       total,
//       totalPages: Math.ceil(total / limit),
//     });
//   }
// );
