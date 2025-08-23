"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { cartItems, userDetails, clearCart, isReady } = useAppContext();
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isReady) return;
    if (!sessionId || hasRun.current) {
      if (!sessionId) window.location.href = "/";
      return;
    }
    hasRun.current = true;

    const processOrder = async () => {
      try {
        // 1) Verify payment
        const verifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, userDetails, cartItems }),
        });
        if (!verifyRes.ok) throw new Error("Verification failed");

        // 2) Send email
        const emailRes = await fetch("/api/send-order-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, userDetails, cartItems }),
        });
        if (!emailRes.ok) throw new Error("Email failed");

        // 3) Clear cart
        clearCart();

        // 4) Redirect to Calendly
        setTimeout(() => {
          window.location.href = "https://calendly.com/myaestheticspro";
        }, 2000);
      } catch (err) {
        console.error(err);
        window.location.href = "/";
      }
    };

    processOrder();
  }, [isReady, sessionId, cartItems, userDetails, clearCart]);

  return (
    <div className="min-h-screen bg-[#252525] text-white p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#2E2E2E] p-8 rounded-lg text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#CAB485]">
            Payment Successful!
          </h1>
          <p className="text-xl mb-6">Thank you for your purchase.</p>
          <p className="mb-8">
            You will be redirected to the home page shortly.
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CAB485]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
