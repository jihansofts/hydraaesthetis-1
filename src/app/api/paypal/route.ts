// api/paypal/route.ts
import paypal from "@paypal/checkout-server-sdk";
import { NextRequest, NextResponse } from "next/server";


// Use sandbox for dev, live for prod
// const environment = new paypal.core.LiveEnvironment(
//   process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_LIVE!,
//   process.env.PAYPAL_CLIENT_SECRET_LIVE!
// );
const environment =
  process.env.NODE_ENV === "production"
    ? new paypal.core.LiveEnvironment(
        process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_LIVE!,
        process.env.PAYPAL_CLIENT_SECRET_LIVE!
      )
    : new paypal.core.SandboxEnvironment(
        process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        process.env.PAYPAL_CLIENT_SECRET!
      );

const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { cartItems } = body;

  type CartItem = { title: string; price: number; quantity: number };
  const total = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: total.toFixed(2),
        },
      },
    ],
  });

  try {

    // 1️⃣ Create PayPal order
    const order = await client.execute(request);


    // 3️⃣ Return PayPal order ID
    return NextResponse.json({
      id: order.result.id,
      status: order.result.status,
    });
  } catch (err) {
    console.error("PayPal Error:", err);
    return NextResponse.json(
      { error: "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}
