import BloodVitaminCard from "@/common/BloodVitaminCard";
import Button2xl from "@/common/Button2xl";
import React from "react";
const Varietoes = [
  {
    image: "/images/OurVarieties1.png",
    title: "Trizepatide (Inj Pen)",
    desc: "Tirzepatide is a powerful once-weekly injection that targets multiple hormones to control appetite, regulate blood sugar, and promote rapid, sustainable weight loss. Delivered through a convenient injection pen, it’s designed to help you lose weight effectively while improving metabolic health.",
  },
  {
    image: "/images/OurVarieties2.png",
    title: "Trizepatide + B12 (Injection)",
    desc: "This advanced combo pairs the powerful weight loss benefits of Tirzepatide with energy-boosting Vitamin B12. Together, they help curb appetite, regulate blood sugar, accelerate fat loss, and fight fatigue—delivered in a convenient weekly injection for optimal results and overall wellness.",
  },
];
export default function OurVarieties() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="lg:text-[48px] font-inter md:text-4xl font-bold text-white mb-4">
          View Our Varieties
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-16">
        {Varietoes.map((item, index) => (
          <BloodVitaminCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button2xl text="Book Consultation" />
      </div>
    </div>
  );
}
