import React from "react";

import PeptideSection from "@/common/PeptideSection";
export default function NicotinamideSection() {
  return (
    <section id="nicotinamide" className="py-10  bg-gradient">
      <div id="nad" className="container  mx-auto lg:px-5 px-5 pb-20">
        <PeptideSection
          title="Nicotinamide Adenine Dinucleotide (NAD+)"
          desc="NAD+ is a vital coenzyme found in every cell, essential for energy production, DNA repair, and overall cellular health. As we age or experience stress, NAD+ levels naturally decline, which can impact energy, brain function, and aging. At Hydra Aesthetics, we offer NAD+ therapy through IV, subcutaneous, or intramuscular injections to help you: "
          descList={[
            "Boost energy and support mitochondrial health",
            "Enhance mental clarity and memory",
            "Reduce fatigue and brain fog",
            "Support healthy aging and longevity",
            "Potentially ease anxiety and depression",
            "Aid recovery in certain cases of substance use",
          ]}
          pList={[
            "Feel revitalized from the inside out with NAD+ therapy tailored for your wellness goals.",
          ]}
          image="/images/nico.png"
          buttonText="Contact for More Info"
        />
        <div id="glutathione">
          <PeptideSection
            title="Glutathione"
            desc="Our Glutathione treatments at Hydra Aesthetics help detoxify your body, brighten your skin, and boost your immune system. As a powerful antioxidant, it works deep within your cells to restore health, enhance radiance, and promote overall wellness."
            image="/images/glut.png"
            buttonText="Contact for More Info"
            reverse
          />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-12  lg:grid-cols-12 justify-center items-center gap-8 gap-x-10">
          <div className="lg:col-span-7 md:col-span-12 space-y-5">
            <h3 className="lg:text-[48px] font-inter md:text-[56px] sm:text-[40px] text-[32px] font-extrabold">
              Nicotinamide adenine <br className="lg:block md:hidden" />{" "}
              dinucleotide (NAD+)
            </h3>
            <p className="text-[16px] font-inter font-medium leading-7 text-bgColor mt-5 mr-20">
              At Hydra Aesthetics, our Testosterone Replacement Therapy (TRT) is
              designed to help men restore vitality, improve energy, and regain
              hormonal balance. If you&apos;re experiencing fatigue, low libido,
              or mood changes, our expert-guided TRT treatments offer a safe and
              effective solution to help you feel stronger, more focused, and
              revitalized.
            </p>
            <ButtonXl text="Contact for More Info" bg="bg-bgColor" />
          </div>
          <div className="lg:col-span-5 md:col-span-12 bg-primary py-16 px-10  rounded-lg">
            <Image
              src="/images/nico.png"
              alt="nicotinamide"
              width={500}
              height={500}
              className="w-full h-full "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 lg:mt-20 md:mt-8 pt-10 lg:grid-cols-12 justify-center items-center gap-8 gap-x-10">
          <div className="lg:col-span-5 md:col-span-12 bg-primary py-16 px-10 space-y-5  rounded-lg">
            <Image
              src="/images/glut.png"
              alt="nicotinamide"
              width={500}
              height={500}
              className="w-full h-full "
            />
          </div>
          <div className="lg:col-span-7 md:col-span-12">
            <h3 className="lg:text-[48px] font-inter md:text-[56px] sm:text-[40px] text-[32px] font-extrabold">
              Glutathione
            </h3>
            <p className="text-[16px] font-inter font-medium leading-7 text-bgColor mt-5 mr-20">
              At Hydra Aesthetics, our Testosterone Replacement Therapy (TRT) is
              designed to help men restore vitality, improve energy, and regain
              hormonal balance. If you&apos;re experiencing fatigue, low libido,
              or mood changes, our expert-guided TRT treatments offer a safe and
              effective solution to help you feel stronger, more focused, and
              revitalized.
            </p>
            <ButtonXl text="Contact for More Info" bg="bg-bgColor" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
