import React from "react";

interface Button2xlProps {
  // Define any props if needed
  text: string;
}
export default function Button2xl({ text }: Button2xlProps) {
  return (
    <button
      className="
                relative cursor-pointer overflow-hidden 
                font-bold py-3  lg:px-32 md:px-24 px-16 sm:px-16 rounded-lg 
                text-[#1E1E1E]
               bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539]">
      <span className="relative z-10">{text}</span>
    </button>
  );
}
