import Hero from "@/common/Hero";
import React from "react";

export default function HeroSection() {
  return (
    <section className="lg:py-0 md:py-10 py-20 sm:py-10  bg-primary relative">
      <Hero
        title="Revitalize. Renew. Conquer the new and confident you."
        description="Welcome to <strong class='text-white'> Hydra Aesthetics</strong>—your destination for expertly crafted IV hydration, vitamin infusions, hormone therapy, PRP treatments, and more. We provide personalized wellness and aesthetic services designed to help you look and feel your absolute best. <br /><strong class='text-white'>Ask about our exclusive package deals and take the next step on your journey to lasting health and beauty.</strong>"
      />
    </section>
  );
}
