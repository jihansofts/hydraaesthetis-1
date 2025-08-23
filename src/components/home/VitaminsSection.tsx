import React, { useEffect, useState } from "react";
import PreptideCard from "@/common/VitaminDripsCard";

type VitaminItem = {
  _id: string; // ✅ match API response
  index?: number;
  name: string;
  description: string[];
  slug?: string; // make optional if API doesn’t always return it
  price: number;
  image: string;
};

const VitaminsSection: React.FC = () => {
  const [vitamins, setVitamins] = useState<VitaminItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8;

  const fetchVitamins = async (pageNumber: number) => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/product?category=vitamin&limit=${limit}&page=${pageNumber}`
      );
      const data = await res.json();

      setVitamins((prev) => [...prev, ...data.products]);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching vitamins:", error);
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
    <section id="vitamins" className="bg-bgColor py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-white font-inter text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          Vitamins Injections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {vitamins.map((item, index) => {
            return (
              <PreptideCard
                key={index}
                index={index}
                productId={item._id} // id found
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
                className="animate-pulse rounded-lg bg-gray-800 p-6 h-72 w-full">
                <div className="h-40 bg-gray-700 rounded-md mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
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
};

export default VitaminsSection;
