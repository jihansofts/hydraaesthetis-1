import React from "react";
const dataCard = [
  {
    image: "/images/varietie1.png",
    title: "Injectable (TRT)",
    desc: "Experience consistent and effective testosterone levels with physician-prescribed injectable therapy. A proven method for boosting energy, mood, and vitality.",
  },
  {
    image: "/images/varietie2.png",
    title: "Pellets (Oral TRT)",
    desc: "Enjoy long-lasting testosterone support with convenient, slow-release oral pellets. A hassle-free option for steady hormone balance and improved well-being. Ask ChatGPT",
  },
  {
    image: "/images/varietie3.png",
    title: "Cream (TRT)",
    desc: "A simple, non-invasive option—testosterone cream is applied daily to the skin for steady hormone absorption and improved energy, mood, and focus.",
  },
];
import CardBlog from "@/common/CardBlog";
import Button2xl from "@/common/Button2xl";
const Varieties = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          View Our Varieties
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dataCard.map((item, index) => (
          <CardBlog key={index} item={item} index={index} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button2xl text="Book Consultation" />
      </div>
    </div>
  );
};

export default Varieties;
