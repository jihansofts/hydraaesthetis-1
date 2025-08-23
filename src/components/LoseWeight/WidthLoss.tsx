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
              src="/images/width1.png"
              alt="weight loss benefits"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>

          {/* Bottom Right Image - Stack on small, absolute on lg+ */}
          <div className="lg:absolute lg:bottom-[10%] lg:right-[5%] w-full sm:w-[80%] md:w-[70%] lg:w-[320px] mx-auto lg:mx-0 z-10">
            <Image
              src="/images/width2.png"
              alt="weight loss treatment"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className=" md:pl-10">
          <h2 className="lg:text-[48px] font-inter  sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Lose Weight Faster With Our Exclusive Products ?
          </h2>
          <p className="text-[16px] font-inter font-normal text-[#FFFFFFC9] mb-8">
            Unlock faster fat loss with our expertly formulated, science-backed
            products designed to boost metabolism, curb cravings, and support
            hormone balance. Whether you&apos;re targeting stubborn belly fat or
            aiming for overall transformation, our exclusive supplements and
            treatments work in harmony with your body to accelerate results and
            keep the weight off for good.
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
