"use client";

import React from "react";
import Button from "./Button";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <div className="container px-5 mx-auto  ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between xl:gap-2 lg:gap-5  md:px-0">
        {/* Left Content */}
        <motion.div
          className="flex flex-col max-w-2xl space-y-10 justify-center items-start lg:pr-10 md:pr-0 pr-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-white lg:text-[40px] md:text-[32px] sm:text-[32px] text-[32px] font-extrabold">
            {title || "Welcome to Hydra Aesthetics"}
          </h2>
          <p
            className="text-[#FFFFFFC9] md:text-[16px] text-[14px] font-medium leading-9"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />

          <ul className="flex flex-col sm:flex-row sm:flex-wrap lg:gap-6 md:gap-4 sm:gap-2 gap-2 items-start justify-start">
            {/* Glendale Location */}
            {/* <li className="flex items-start justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[#C4AC7B] mt-1 mr-3 flex-shrink-0 text-xl" />
              <div>
                <p className="bg-gradient-to-r font-bold font-inter from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  8205 Santa Monica blvd, <br /> West Hollywood 90046
                </p>
                <p className="bg-gradient-to-r font-inter font-medium mt-2 text-[12px] from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  ( Aesthetics, Procedure, Services )
                </p>
              </div>
            </li> */}
            {/* <li className="flex items-start justify-center md:justify-start">
              <FaClinicMedical className="text-[#252525] mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent"></span>
            </li> */}

            {/* Burbank Location */}
            <li className="flex items-start justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[#C4AC7B] mt-1 mr-3 flex-shrink-0 text-xl" />
              <div>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/1030+S+Glendale+Ave+%23404,+Glendale,+CA+91205,+USA/@34.1337858,-118.2541787,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c11decaf89d3:0xd5de74f5cd7ea657!8m2!3d34.1337814!4d-118.2516038!16s%2Fg%2F11ll6tf078?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  className="bg-gradient-to-r font-inter font-bold from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  1030 S. Glendale Ave Unit 404 <br /> Glendale CA 91205
                </Link>
                {/* <p className="bg-gradient-to-r font-inter font-medium mt-2 text-[12px] from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  ( Consultations only )
                </p> */}
              </div>
            </li>
          </ul>
          {/* <div className="relative inline-block font-extrabold text-white z-10">
            <span className="relative inline-block ml-1 lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px]">
              {subtitle || "Explore Our Services"}
              <span className="absolute bottom-[-2px] p-2 left-[-8px] right-[-8px] h-[10px] bg-[#D9C79B69] z-[-1]"></span>
            </span>
          </div> */}

          <div className="mt-2">
            <a className="block" href="tel:+18186698271">
              <Button
                bg="bg-bgColor"
                text="Call Us +1 818 669 8271"
                borderLeanr="gradient-border"
              />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:mt-0 sm:mt-5 mt-2 w-full md:w-[800px] md:h-[800px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
          <video
            src="https://res.cloudinary.com/dhutuvffo/video/upload/v1755445492/Reel_1_sitgv9.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-center lg:mt-20 md:mt-10 sm:mt-10 mt-10 lg:w-[700px] md:h-[600px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
