// app/checkout/success/page.tsx
"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function PaymentSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearCart } = useAppContext();

  useEffect(() => {

    // Verify payment and clear cart
    
    clearCart();

    // You might want to store the successful payment in your database here
    // via an API call
  }, [clearCart, searchParams]);

  return (
    <div className="min-h-screen bg-[#252525] text-white p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#2E2E2E] p-8 rounded-lg text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#CAB485]">
            Payment Successful!
          </h1>
          <p className="text-xl mb-6">Thank you for your purchase.</p>
          <button
            onClick={() => router.push("/")}
            className="bg-[#CAB485] text-[#1E1E1E] font-bold py-2 px-6 rounded-md hover:opacity-90">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
