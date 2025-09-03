import ButtonXl from "@/common/ButtonXl";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Microneedling() {
  return (
    <section className="relative  bg-gradient py-20">
      <div className="relative  z-10 container mx-auto px-5 space-y-20">
        <div
          id="microneedling"
          className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 justify-between items-center gap-8 py-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-7 lg:ml-10 md:ml-0 md:col-span-12 space-y-10">
            <div className="lg:max-w-3xl md:max-w-full">
              <h3 className="lg:text-[48px] md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter text-[#A70049] drop-shadow-[0px_15px_15px_rgba(208,0,95,0.7)]">
                Microneedling & PRP
              </h3>

              <p
                className={`text-[16px] font-inter font-medium leading-7 text-[#1E1E1E] mt-5 lg:mr-20 md:mr-0`}>
                At Hydra Aesthetics, we offer advanced skincare treatments
                designed to leave your skin smoother, firmer, and radiant. Our
                microneedling combined with Platelet-Rich Plasma (PRP) harnesses
                your body’s natural healing to boost collagen, improve texture,
                reduce fine lines and acne scars, and enhance overall skin tone.
                This minimally invasive procedure is tailored by our expert team
                to meet your unique goals—whether you want a subtle glow or
                deeper skin renewal.
              </p>
            </div>
            <ButtonXl
              text="Book Consultation"
              bg="bg-bgColor"
              textColor="text-gradient"
            />
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 md:col-span-12   rounded-lg ">
            <Image
              src="/images/mico.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-7 lg:ml-10 md:ml-0 md:col-span-12 space-y-10">
            <div className="lg:max-w-3xl md:max-w-full">
              <h3 className="lg:text-[48px] md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter text-[#A70049] drop-shadow-[0px_15px_15px_rgba(208,0,95,0.7)]">
                Potenza™️ RF Microneedling
              </h3>
              <span className="text-[16px] font-inter font-medium leading-7 text-[#1E1E1E] mt-5 lg:mr-20 md:mr-0">
                Revitalize your skin from the inside out. Potenza™️ RF
                Microneedling combines ultra-fine needles with radiofrequency
                energy to trigger collagen and elastin production for firmer,
                smoother, more radiant skin.
              </span>
              <p
                className={`text-[16px] font-inter font-medium leading-7 text-[#1E1E1E] mt-5 lg:mr-20 md:mr-0`}>
                Benefits include:
              </p>
              <ul className="list-disc ml-10 ">
                <li>Reduces fine lines & wrinkles</li>
                <li>Improves tone, texture & pores</li>
                <li>Minimizes acne scars & blemishes</li>
                <li>Tightens and lifts skin with minimal downtime</li>
              </ul>
              <p
                className={`text-[16px] font-inter font-medium leading-7 text-[#1E1E1E] mt-5 lg:mr-20 md:mr-0`}>
                A safe, customizable treatment for all skin types—any time of
                year.
              </p>
            </div>
            {/* <ButtonXl
              text="Book Consultation"
              bg="bg-bgColor"
              textColor="text-gradient"
            /> */}
          </motion.div>
          {/* Image */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 md:col-span-12   rounded-lg ">
            <Image
              src="/images/mico.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full"
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
