import React from "react";
import CardBlog from "@/common/CardBlog";

import Button2xl from "@/common/Button2xl";

const cardData = [
  {
    image: "/images/acive1.png",
    title: "Blood Work (Quest Labs)",
    desc: "Get fast, accurate hormone testing through our partner, Quest Diagnostics. Your results help us tailor the perfect TRT plan for you.",
  },

  {
    image: "/images/acive2.png",
    title: "Book Consultation",
    desc: "Schedule a 1-on-1 consultation with our experts to discuss your symptoms, goals, and personalized TRT options. Take the first step toward feeling your best.",
  },
  {
    image: "/images/acive3.png",
    title: "Begin Your Journey",
    desc: "Start your path to renewed energy, strength, and confidence. Take control of your health with personalized TRT support.",
  },
];
const Achieve = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="lg:text-[48px]  font-inter md:text-4xl font-bold text-white mb-4">
          Achieve Results in Only 3 Easy Steps
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <CardBlog key={index} item={item} index={index} />
        ))}
      </div>
      <div className="flex w-full items-center justify-center mt-10">
        <Button2xl text="Get Started" />
      </div>
    </div>
  );
};

export default Achieve;
