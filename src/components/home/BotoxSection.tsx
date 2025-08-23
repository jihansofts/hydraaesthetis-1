"use client";

import React from "react";

import HormoneSection from "@/common/HormoneSection";
import { motion } from "framer-motion";


export default function BotoxSection() {
  return (
    <section id="botox" className="relative  bg-gradient py-20">
      {/* Background image layer */}
      {/* Content layer */}
      <div className="relative  z-10 container mx-auto px-5 space-y-20">
        <motion.div
          id="botox"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          <HormoneSection
            title="Botox & Fillers"
            image="/images/face1.png"
            buttonText="Book Consultation"
            desc={[
              "At Hydra Aesthetics, our Botox treatments offer a safe, effective, and non-surgical way to refresh your appearance by smoothing fine lines and wrinkles. Whether targeting forehead lines, frown lines, or crow’s feet, our skilled professionals use precise techniques for natural, subtle results. With minimal discomfort and no downtime, Botox is a quick, convenient way to maintain a youthful, confident look. We offer personalized treatments including dermal fillers—all designed to enhance your natural beauty. Let us help you look as vibrant as you feel.",
            ]}
            contentColor="text-[#1E1E1E]"
            textColor="text-gradient"
            bgBtnColor="bg-bgColor"
          />
        </motion.div>

        {/* <motion.div
          id="fillers"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}>
          <HormoneSection
            title="Fillers & Muscle Relaxers"
            image="/images/face2.png"
            buttonText="Book Consultation"
            desc={[
              "At Hydra Aesthetics, confidence begins with feeling your best inside and out. We offer personalized treatments including dermal fillers, muscle relaxers, hormone therapy, vitamin injections, and weight loss solutions—all designed to enhance your natural beauty and boost overall wellness. Our expert team is dedicated to guiding you every step of the way with compassionate, professional care tailored to your unique goals. Experience modern aesthetics crafted just for you.",
            ]}
            contentColor="text-[#1E1E1E]"
            textColor="text-gradient"
            bgBtnColor="bg-bgColor"
            reverse
          />
        </motion.div> */}
      </div>
    </section>
  );
}
