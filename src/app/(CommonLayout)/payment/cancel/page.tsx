// app/payment/success/page.tsx
import React, { Suspense } from "react";

import PaymentSuccess from "@/common/PaymentCancelContent";

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
}
