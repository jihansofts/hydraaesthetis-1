import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type PreptideCardProps = {
  handleDelete: () => void;
  productId: string; // expects string ✅
  index: number;
  title: string;
  desc: string[];
  price: number;
  image: string;
};

const DripsCard: React.FC<PreptideCardProps> = ({
  handleDelete,
  productId,
  index,
  title,
  price,
  desc,
  image,
}) => {
  console.log(productId, "id");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.9 }}
      className="bg-[#2E2E2E] min-h-[300px] mx-auto border border-[#CAB485] rounded-lg p-4 lg:w-[300px] md:w-[300px] w-full sm:w-full flex flex-col justify-between">
      {/* Top section with image + price */}
      <div key={index} className="flex justify-between items-start mb-3">
        <Image
          src={image}
          alt={title || "Product"}
          width={100}
          height={100}
          className="w-16 h-16 object-cover rounded"
        />
        <span className="text-[#CAB485] text-xl font-bold">${price}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-snug">{desc}</p>

      {/* Buttons */}
      <div className="flex gap-3 w-full mt-4">
        <button
          onClick={() => window.location.href = `/admin/${productId}`}
          className="bg-gradient w-full text-[#1E1E1E] font-bold text-sm py-3 px-4 rounded-md hover:opacity-90">
          Edit
        </button>
        <button
          onClick={handleDelete}
          className=" w-full gradient-border cursor-pointer  text-[#BAA57B] text-sm py-3 px-4 rounded-md hover:bg-[#CAB485] hover:text-black transition">
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default DripsCard;
