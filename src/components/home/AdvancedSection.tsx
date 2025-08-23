"use client";
import React from "react";
import Button from "@/common/Button";
import PeptideCard from "@/common/TherapiesCard";

const peptides = [
  {
    title: "AOD 9604",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: [
      "A targeted peptide that supports fat burning and boosts metabolism to help you achieve a leaner physique ...",
    ],
  },
  {
    title: "BPC-157",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: [
      "A natural healing peptide that promotes faster recovery and repairs connective tissues, so you feel better, faster.",
    ],
  },
  {
    title: "Cerebrolysin",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: [
      "A brain-supporting peptide blend designed to enhance memory, focus, and overall cognitive health.",
    ],
  },
  {
    title: "CJC1295 + Ipamorelin",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: [
      "A powerful duo that stimulates growth hormone release for improved muscle recovery, <strong>energy, and youthful vitality</strong>",
    ],
  },
  {
    title: "Dihexa",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: [
      "A peptide that supports brain health and cognitive function, helping to improve mental clarity and memory.",
    ],
  },
  {
    title: "DSIP",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: [
      "A natural peptide that helps regulate sleep patterns and promotes restful, restorative sleep.",
    ],
  },
  {
    title: "Epitalon",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: [
      "A longevity peptide that supports healthy aging and cellular regeneration for lasting vitality.",
    ],
  },
  {
    title: "Fenbendazole",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: [
      "A peptide that disrupts harmful cells’ growth, supporting your body’s natural defenses.",
    ],
  },
];

export default function ExclusiveSection() {
  return (
    <section id="advanced-peptides" className="bg-bgColor py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-white font-inter text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          Advanced Peptide Therapies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {peptides.map((item, index) => (
            <PeptideCard
              key={index}
              title={item.title}
              desc={item.desc}
              slug={item.slug}
            />
          ))}
        </div>
        <div className="mx-auto mt-12 w-full text-center">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview">
            <Button text="See More Peptides" borderLeanr="gradient-border" />
          </a>
        </div>
      </div>
    </section>
  );
}
