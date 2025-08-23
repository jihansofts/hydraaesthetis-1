import HormoneSection from "@/common/HormoneSection";
import React from "react";

export default function Hormone() {
  return (
    <section id="hormone" className="py-20 bg-bgColor">
      <div id="hrt" className="container  mx-auto px-5">
        <HormoneSection
          title="Hormone Replacement Therapy (HRT)"
          desc={[
            "At Hydra Aesthetics, we empower you to take control of your health with personalized hormone replacement therapy. Our expert team partners with you throughout your journey, providing guidance and support every step of the way.",
            "Whether you want to restore hormonal balance, boost energy, or refresh your appearance, we create customized plans using peptide and testosterone therapies tailored to your unique needs. Experience compassionate, expert care designed to help you look and feel your absolute best.",
          ]}
          contentColor="text-white"
          image="/images/hormone1.png"
          textColor="text-[#1E1E1E]"
          bgBtnColor="bg-gradient"
          buttonText="Book Consultation"
          reverse={false}
        />
        <div id="trt">
          <HormoneSection
            title="Testosterone Replacement Therapy (TRT)"
            desc={[
              "At Hydra Aesthetics, our Testosterone Replacement Therapy helps men restore vitality, boost energy, and balance hormones. If you’re dealing with fatigue, low libido, or mood shifts, our expert-guided TRT offers a safe, effective way to feel stronger, sharper, and revitalized.",
            ]}
            image="/images/hormone2.png"
            bgBtnColor="bg-gradient"
            contentColor="text-white"
            buttonText="Book Consultation"
            reverse
            textColor="text-[#1E1E1E]"
          />
        </div>
      </div>
    </section>
  );
}
