import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

type PreptideCardProps = {
  productId: string;
  index: number;
  title: string;
  desc: string[];
  price: number;
  image: string;
};

const PreptideCard: React.FC<PreptideCardProps> = ({
  productId,
  index,
  title,
  desc,
  price,
  image,
}) => {
  const { addToCart } = useAppContext();

  console.log(productId, "productId f");
  const handleAddToCart = () => {
    addToCart({ productId, title, price, quantity: 1 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.9 }}
      className="bg-[#2E2E2E] mx-auto h-[360px] border border-[#CAB485] rounded-lg p-4 lg:w-[300px] md:w-[300px] w-full sm:w-full flex flex-col justify-between">
      {/* Top section with image + price */}
      <div key={index} className="flex justify-between items-start mb-3">
        <Image
          src={image}
          alt={title || "Product"}
          width={150}
          height={150}
          className="w-20 h-24 object-cover rounded"
        />
        <span className="text-[#CAB485] text-xl font-bold">${price}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-snug">
        {desc}
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://drive.google.com/file/d/${slug}`}
          className="text-[#D9C79B] font-medium ml-1">
          Read More
        </a> */}
      </p>

      {/* Buttons */}
      <div className="flex gap-3 w-full mt-4">
        {/* <a
          target="_blank"
          href="https://www.myaestheticspro.com/BN/index.cfm?A78B66E7FFE2188433572F72D74E0F5F"
          className="bg-gradient w-full text-[#1E1E1E] font-bold text-sm py-3 px-4 rounded-md hover:opacity-90">
          Consultation
        </a> */}
        <button
          onClick={handleAddToCart}
          className=" w-full gradient-border cursor-pointer  text-[#BAA57B] text-sm py-3 px-4 rounded-md hover:bg-[#CAB485] hover:text-black transition">
          Add to cart
        </button>
      </div>
    </motion.div>
  );
};

export default PreptideCard;
