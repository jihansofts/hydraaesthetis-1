"use client";
import Button from "@/common/Button";
import { baseUrl } from "@/helper/config";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !price || !image) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Name, price, and image are required",
      });
      return;
    }

    // Drop product description validation
    if (description.length > 130) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Description must be less than 130 characters",
      });
      return;
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      setLoading(true);

      const res = await fetch(`${baseUrl}/api/product`, {
        method: "POST",
        // ❌ Don't set Content-Type manually for FormData
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.error || "Failed to create product",
        });
      }

      Swal.fire({
        icon: "success",
        title: "Product Created Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      // Redirect to product page
      router.push("/admin/product-all");

      // Reset form
      setCategory("");
      setName("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error instanceof Error ? error.message : "Something went wrong",
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen text-white"
      encType="multipart/form-data">
      <div className="container mx-auto px-4 sm:px-6 md:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Form */}
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-[40px] font-extrabold mb-8">
              Provide Information
            </h1>

            <div>
              <label className="block text-lg font-bold mb-2 text-white">
                Category Of Product
              </label>
              <select
                title="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 text-white">
                <option value="">Select category</option>
                <option value="drop">IV Drips</option>
                <option value="vitamin">Vitamins</option>
                <option value="our">Our Products</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-bold mb-2 text-white">
                Name Of The Product
              </label>
              <input
                type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="block text-lg font-bold mb-2 text-white">
                Enter Price
              </label>
              <input
                placeholder="price"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="block text-lg font-bold mb-2 text-white">
                Description
              </label>
              <textarea
                placeholder="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 text-white"></textarea>
            </div>
          </div>

          {/* Right - Image Upload */}
          <div className="bg-[#2E2E2E] rounded-lg p-6 flex flex-col items-center justify-center mt-6 lg:mt-0">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Upload Image
            </h3>
            <label className="w-full h-56 border-2 border-dashed border-[#D6A553] flex flex-col items-center justify-center cursor-pointer bg-[#494D47] rounded-md">
              <span className="text-[#D6A553]">Choose a file</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files) setImage(e.target.files[0]);
                }}
                className="hidden"
              />
            </label>
            {image && <p className="mt-2">{image.name}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <Button
            text={loading ? "Uploading..." : "Add Product"}
            bg="bg-[#2E2E2E]"
            borderLeanr="gradient-border"
          />
        </div>
      </div>
    </form>
  );
}
