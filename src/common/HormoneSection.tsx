"use client";

import React from "react";
import Image from "next/image";
import ButtonXl from "./ButtonXl";
import { motion } from "framer-motion";

interface TreatmentSectionProps {
  title: string;
  desc: string[];
  image: string;
  bgBtnColor: string;
  textColor: string;
  buttonText: string;
  contentColor: string;
  reverse?: boolean;
}

export default function HormoneSection({
  title,
  desc,
  image,
  contentColor,
  bgBtnColor,
  textColor,
  buttonText,
  reverse = false,
}: TreatmentSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 justify-between items-center gap-8 py-10">
      {reverse ? (
        <>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 md:col-span-12   rounded-lg ">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-7 lg:ml-10 md:ml-0 md:col-span-12 space-y-10">
            <div className="lg:max-w-3xl md:max-w-full">
              <h3
                className={`lg:text-[48px] ${contentColor} md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter`}>
                {title}
              </h3>
              {Array.isArray(desc) ? (
                desc.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-[16px] font-inter font-medium leading-7 ${contentColor} mt-5 lg:mr-20 md:mr-0`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))
              ) : (
                <p
                  className={`text-[16px] font-inter font-medium leading-7 ${contentColor} mt-5 lg:mr-20 md:mr-0`}
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              )}
            </div>
            <ButtonXl text={buttonText} bg={bgBtnColor} textColor={textColor} />
          </motion.div>
        </>
      ) : (
        <>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-7 md:col-span-12 space-y-10">
            <div className="max-w-3xl">
              <h3
                className={`lg:text-[48px] ${contentColor} md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter`}>
                {title}
              </h3>
              {Array.isArray(desc) ? (
                desc.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-[16px] font-inter font-medium leading-7 ${contentColor} mt-5 lg:mr-20 md:mr-0`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))
              ) : (
                <p
                  className={`text-[16px] font-inter font-medium leading-7 ${contentColor} mt-5 lg:mr-20 md:mr-0`}
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              )}
            </div>
            <ButtonXl text={buttonText} bg={bgBtnColor} textColor={textColor} />
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 md:col-span-12 rounded-lg">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </motion.div>
        </>
      )}
    </div>
  );
}
