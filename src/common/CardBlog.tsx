import React from "react";
import Image from "next/image";

interface CardBlogProps {
  item: {
    image: string;
    title: string;
    desc: string;
  };
  index: number;
}
export default function CardBlog({ item, index }: CardBlogProps) {
  return (
    <div
      key={index}
      className=" overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="h-72 overflow-hidden rounded-lg">
        <Image
          src={item.image}
          width={500}
          height={500}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="py-6">
        <h3 className="text-[30px] font-inter font-bold text-gray-100 mb-3">
          {item.title}
        </h3>
        <p className="text-white mb-4">{item.desc}</p>
      </div>
    </div>
  );
}
