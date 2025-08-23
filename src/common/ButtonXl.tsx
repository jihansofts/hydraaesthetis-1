import React from "react";

interface ButtonXlProps {
  text: string;
  bg: string;
  textColor: string;
}
export default function ButtonXl({ text, bg, textColor }: ButtonXlProps) {
  return (
    <div className={`${bg}  rounded-md w-[232px] text-center px-8 mt-5`}>
      <a
        target="_blank"
        href="https://www.myaestheticspro.com/BN/index.cfm?A78B66E7FFE2188433572F72D74E0F5F">
        <button
          className={`${textColor} cursor-pointer w-full text-[16px] font-bold   py-4 rounded-lg `}>
          {text}
        </button>
      </a>
    </div>
  );
}
