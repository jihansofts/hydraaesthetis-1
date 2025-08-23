import Hero from "@/common/Hero";
import React from "react";

export default function HeroVarietiesSection() {
  return (
    <section className="py-20 bg-primary relative">
      <Hero
        title="Know Your Numbers. Take Control of Your Health."
        description="Comprehensive blood testing is the first step in understanding your hormone levels and overall health. Our panels check key markers like testosterone, estrogen, thyroid, and more—giving us the data needed to create a personalized treatment plan tailored to your unique needs. Accurate. Fast. Confidential."
        subtitle="Blood Work Options:"
      />
    </section>
  );
}
