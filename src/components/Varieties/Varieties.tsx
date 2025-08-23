import React from "react";
import Button2xl from "@/common/Button2xl";
import BloodVitaminCard from "@/common/BloodVitaminCard";

const Varietoes = [
  {
    image: "/images/vari1.png",
    title: "Injectable (TRT)",
    desc: "Experience consistent and effective testosterone levels with physician-prescribed injectable therapy. A proven method for boosting energy, mood, and vitality.",
  },
  {
    image: "/images/vari2.png",
    title: "Men’s Panel",
    desc: "Our Men’s Panel includes comprehensive testing of key hormones such as testosterone, DHT, estrogen, and thyroid, along with important health markers like cholesterol and blood count. This detailed analysis helps identify imbalances that affect energy, muscle mass, mood, and overall vitality—providing the foundation for a personalized treatment plan tailored to your health goals.",
  },
  {
    image: "/images/vari3.png",
    title:
      "TRT Labs and Total Testosterone | PSA | CBC | FSH and LH – new patients",
    desc: "Our initial lab panel includes Total Testosterone, PSA (Prostate-Specific Antigen), CBC (Complete Blood Count), and FSH & LH (Follicle-Stimulating Hormone and Luteinizing Hormone). These tests provide a thorough assessment of your hormone levels, prostate health, and overall wellness—essential for creating a safe, effective, and personalized Testosterone Replacement Therapy plan.",
  },
  {
    image: "/images/vari4.png",
    title: "Comprehensive Blood Work Panel",
    desc: "Our Comprehensive Blood Work Panel analyzes essential biomarkers including testosterone, estrogen, thyroid function, liver health, cholesterol, and more. This in-depth testing gives a clear picture of your overall health and hormone levels—helping us design a treatment plan tailored to your body’s unique needs. Accurate results. Smarter decisions. Better outcomes.",
  },
];
const Varieties = () => {
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
};

export default Varieties;
