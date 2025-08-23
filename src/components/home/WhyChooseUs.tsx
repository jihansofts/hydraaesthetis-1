import React from "react";

interface WhyChooseUsProps {
  serviceRef?: React.RefObject<HTMLDivElement>;
  showWhyChoose?: boolean; //
}

const WhyChooseUs = ({ serviceRef }: WhyChooseUsProps) => {
  const services = [
    { id: "iv-drips", title: "IV Drips" },
    { id: "hrt", title: "Hormone Replacement Therapy (HRT)" },
    { id: "trt", title: "Testosterone Replacement Therapy (TRT)" },
    { id: "advanced-peptides", title: "Advanced Peptide Therapies" },
    { id: "nad", title: "NAD+" },
    { id: "glutathione", title: "Glutathione" },
    { id: "vitamins", title: "Vitamins Injections" },
    // { id: "fillers", title: "Fillers & Muscle Relaxers" },
    { id: "microneedling", title: "Microneedling & PRP" },

    { id: "botox", title: "Botox & Fillers" },
    { id: "aesthetics-home", title: "Hydra Aesthetics At Home" },
  ];

  return (
    <section className="bg-[#2E2E2E] text-white py-16 px-4 text-center">
      <div className="mx-auto container max-w-7xl py-10">
        {/* Scroll target for serviceRef */}
        <div ref={serviceRef} id="our-services">
          <h2 className="lg:text-[56px] md:text-[32px] text-[32px] font-extrabold mb-2">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-4 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                onClick={() => {
                  const element = document.getElementById(service.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                key={index}
                className="bg-gradient-to-r cursor-pointer from-[#CAB485] via-[#D9C9A1] to-[#8A6D42] text-[#1E1E1E]  font-bold py-3 px-4 rounded-lg lg:text-[16px] md:text-[12px] text-[12px] shadow-md hover:scale-105 transition-transform duration-300">
                {service.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
