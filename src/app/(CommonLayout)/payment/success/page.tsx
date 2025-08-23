// app/payment/success/page.tsx
import React, { Suspense } from "react";
import PaymentSuccessContent from "@/common/PaymentSuccessContent"; // move hook here

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
