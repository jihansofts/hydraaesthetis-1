import Stripe from "stripe";
import { NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-07-30.basil",
});

interface RequestBody {
  cartItems: {
    productId: string;
    title: string;
    price: number;
    quantity: number;
  }[];
  userDetails: {
    fullName: string;
    email: string;
    phone?: string;
    address?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { cartItems, userDetails }: RequestBody = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel`,
      metadata: {
        userEmail: userDetails.email,
        userName: userDetails.fullName,
      },
      customer_email: userDetails.email,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return Response.json(
      { error: "Payment processing failed" },
      { status: 500 }
    );
  }
}
