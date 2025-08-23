"use client";
import BotoxSection from "@/components/home/BotoxSection";
import DripsSection from "@/components/home/DripsSection";
import ExclusiveSection from "@/components/home/AdvancedSection";
import HeroSection from "@/components/home/HeroSection";
import Hormone from "@/components/home/Hormone";
import HydraAest from "@/components/home/HydraAest";
import Magic from "@/components/home/Magic";
import NicotinamideSection from "@/components/home/NicotinamideSection";

import React from "react";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VitaminsSection from "@/components/home/VitaminsSection";
import Microneedling from "@/components/home/Microneedling";
import OurService from "@/components/home/OurService";
import ItemCard from "@/common/ItemCard";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurService />
      <DripsSection />
      <ItemCard/>
      <Hormone />
      <ExclusiveSection />
      <NicotinamideSection />
      <VitaminsSection />
      <BotoxSection />
      <Microneedling />
      <Magic />
      <HydraAest />
      <WhyChooseUs />
    </main>
  );
}
