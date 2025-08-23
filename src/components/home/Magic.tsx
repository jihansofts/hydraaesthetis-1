import React from "react";
import Image from "next/image";
export default function Magic() {
  return (
    <section className="lg:py-20 md:py-10 bg-[#252525] py-10 sm:py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-gradient font-inter text-center text-[36px] md:text-[56px] font-bold mb-12">
          Transformations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="flex flex-col items-center justify-center">
            <h4 className="lg:text-[32px] text-white md:text-3xl sm:text-2xl text-2xl  font-extrabold">
              Before
            </h4>
            <Image
              src="/images/Before.png"
              alt="Magic"
              width={500}
              height={500}
              className="mt-10 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="lg:text-[32px] text-white md:text-3xl sm:text-2xl text-2xl  font-extrabold">
              After
            </h4>
            <Image
              src="/images/After.png"
              alt="Magic"
              width={500}
              height={500}
              className="mt-10 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
