import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import ButtonXl from "@/common/ButtonXl";

export default function HydraAest() {
  return (
    <section className="lg:py-20 pb-5 md:py-10 py-5 sm:py-5 bg-[#2E2E2E] relative">
      <div
        id="aesthetics-home"
        className="container px-5 mx-auto lg:py-10 md:py-5 py-2 sm:py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between xl:gap-2 lg:gap-5 md:px-0">
          {/* Left Content */}
          <motion.div
            className="flex flex-col max-w-2xl space-y-5 justify-center items-start lg:pr-10 md:pr-0 pr-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <h2 className="text-white lg:text-[64px] md:text-[56px] sm:text-[40px] text-[32px] font-extrabold">
              Hydra Aesthetics At Home
            </h2>
            <p className="text-[#FFFFFFC9] md:text-[16px] text-[14px] font-medium leading-9">
              Skip the waiting rooms—our mobile services bring expert care right
              to your doorstep. Whether it’s lab work, vitamin injections, or
              consultations, our licensed professionals provide safe,
              convenient, and discreet treatments in the comfort of your home or
              office. Healthcare on your schedule, tailored to fit your
              lifestyle.
            </p>
            <span className="text-white text-[16px] font-inter font-black">
              Additional medical services may be available—ask our dedicated
              healthcare team for details.
            </span>
      

            <div className="mt-5">
              <ButtonXl
                text="Book Consultation"
                bg="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539]"
                textColor="#1E1E1E"
              />
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:absolute lg:right-0 lg:top-20 w-full lg:w-[50%] mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
            <Image
              src="/images/hydra.svg"
              alt="hero"
              width={500}
              height={500}
              className="w-full object-center h-full"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
