import React from "react";
import Image from "next/image";

const WhyHRT = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-5 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6  items-center">
        <div className="relative h-full min-h-[500px]">
          {/* Top Left Image - Stack on small, absolute on lg+ */}
          <div className="lg:absolute lg:top-0 lg:left-0 w-full sm:w-[80%] md:w-[70%] lg:w-[320px] mx-auto lg:mx-0 mb-6 lg:mb-0 z-10">
            <Image
              src="/images/whyhrt1.png"
              alt="HRT benefits"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>

          {/* Bottom Right Image - Stack on small, absolute on lg+ */}
          <div className="lg:absolute lg:bottom-[10%] lg:right-[5%] w-full sm:w-[80%] md:w-[70%] lg:w-[320px] mx-auto lg:mx-0 z-10">
            <Image
              src="/images/whyhrt2.png"
              alt="HRT treatment"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className=" md:pl-10">
          <h2 className="text-[32px] font-inter lg:text-[48px] md:text-4xl font-bold text-white mb-6">
            Why Try Hormone Replacement Therapy (HRT) ?
          </h2>
          <p className="text-[16px] font-inter font-normal text-[#FFFFFFC9] mb-8">
            Hormone Replacement Therapy (HRT) helps restore hormonal balance,
            easing symptoms like fatigue, low libido, mood swings, and poor
            sleep. It supports overall well-being, boosts energy, sharpens
            mental clarity, and improves quality of life—especially for those
            experiencing age-related hormone decline.
          </p>

          <button
            className="
            relative overflow-hidden 
            font-bold py-4 px-8 rounded-lg 
            text-black
           bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539]">
            <span className="relative z-10">Request Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyHRT;
