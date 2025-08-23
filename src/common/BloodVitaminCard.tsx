"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BloodVitaminCardProps {
  index?: number; // Optional index prop for mapping
  image: string;
  title: string;
  description: string;
}

export default function BloodVitaminCard({
  index,
  image,
  title,
  description,
}: BloodVitaminCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      key={index}
      className="overflow-hidden transition-transform duration-300 hover:scale-95">
      <div className="h-96  overflow-hidden rounded-lg">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[30px] font-inter font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-[#FFFFFFC9] font-normal text-[16px] mb-4">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
