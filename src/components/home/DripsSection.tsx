"use client";
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import PreptideCard from "@/common/VitaminDripsCard";

type PreptideCardProps = {
  productId: string;
  index?: number;
  name: string;
  description: string[];
  slug: string;
  price: number;
  image: string;
};

export default function DripsSection() {
  const [vitamins, setVitamins] = useState<PreptideCardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8;

  const fetchVitamins = async (pageNumber: number) => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/product?category=drop&limit=${limit}&page=${pageNumber}`
      );
      const data = await res.json();

      setVitamins((prev) => [...prev, ...data.products]);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching drips:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVitamins(1);
  }, []);

  const handleLoadMore = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchVitamins(nextPage);
    }
  };

  return (
    <section className="bg-bgColor py-20">
      <div id="iv-drips" className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white font-inter text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          IV Drips
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Render loaded products */}
          {vitamins.map((item, index) => {
            return (
              <PreptideCard
                key={item.productId || index}
                index={index}
                productId={item.productId}
                title={item.name}
                desc={item.description}
                image={item.image}
                price={item.price}
              />
            );
          })}

          {/* Skeleton loaders while fetching */}
          {loading &&
            Array.from({ length: limit }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="animate-pulse rounded-lg bg-[#2E2E2E] p-6 h-72 w-full">
                <div className="h-40 bg-primary rounded-md mb-4"></div>
                <div className="h-4 bg-primary rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-primary rounded w-1/2"></div>
              </div>
            ))}
        </div>

        {page < totalPages && !loading && (
          <div className="mx-auto mt-12 w-full text-center">
            <button
              onClick={handleLoadMore}
              className="text-[16px] cursor-pointer gradient-border font-bold text-gradient px-8 py-4 rounded-lg">
              More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
