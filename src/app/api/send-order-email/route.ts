// app/api/send-order-email/route.ts
import { connectDB } from "@/lib/mongoose";
import Order from "@/model/Order";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { sessionId, userDetails, cartItems } = await req.json();
    type CartItem = { title: string; price: number; quantity: number };
    const total = cartItems.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.quantity,
      0
    );

    
    const newOrder = await Order.create({
      paypalOrderId: sessionId,
      cartItems: cartItems.map(
        (item: { title: string; price: number; quantity: number }) => ({
          name: item.title, // make sure your field is `title`
          price: item.price,
          quantity: item.quantity,
        })
      ),
      userDetail: {
        name: userDetails.fullName,
        email: userDetails.email,
        phone: userDetails.phone,
        date: userDetails.date,
      },
      total: total,
      status: "PAID",
    });

    const itemsHtml = cartItems
      .map(
        (item: { title: string; quantity: number; price: number }) =>
          `<li><strong>${item.title}</strong> — Quantity: ${item.quantity}, Price: $${item.price}</li>`
      )
      .join("");

    if (!userDetails || !sessionId || !cartItems) {
      return new Response(JSON.stringify({ error: "Missing required data" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "✅ New Order Confirmed",
      html: `
        <h2>New Payment Received</h2>
        <p><strong>Name:</strong> ${userDetails.fullName}</p>
        <p><strong>Order ID:</strong> ${sessionId}</p>
        <p><strong>Email:</strong> ${userDetails.email}</p>
        <p><strong>Phone:</strong> ${userDetails.phone}</p>
        <p><strong>Date:</strong> ${userDetails.date}</p>
        <ul>${itemsHtml}</ul>
   
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(newOrder, "order");

    return NextResponse.json({
      message: "Email sent successfully",
      success: true,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}
