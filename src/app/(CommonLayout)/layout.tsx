"use client";
import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
