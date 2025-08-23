"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const AddModarator = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  async function handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();
      setLoading(true);

      const res = await fetch("/api/user/moderator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await res.json();

      // 🔴 if not admin
      if (res.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "Only Admins can add a moderator.",
        });
        setLoading(false);
        return;
      }

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Moderator Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/admin/moderator-all");
        setFormData({ name: "", email: "", password: "" });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again." + error,
      });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#252525] min-h-screen">
      <div className="max-w-screen-md mx-auto px-4 md:px-8 py-10">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-2xl font-bold md:text-4xl">
            Provide Information
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4">
              <label htmlFor="name" className="text-white font-medium">
                Name Of Moderator
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#2E2E2E] w-full max-w-[577px] h-[45px] rounded-md text-center outline-none text-white px-4"
                required
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <label htmlFor="email" className="text-white font-medium">
                Enter Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#2E2E2E] w-full max-w-[577px] h-[45px] rounded-md text-center outline-none text-white px-4"
                required
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <label htmlFor="password" className="text-white font-medium">
                Create Password
              </label>
              <div className="relative w-full max-w-[577px]">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-[#2E2E2E] w-full h-[45px] rounded-md text-center outline-none text-white px-4"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white focus:outline-none">
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#2E2E2E] hover:bg-[#2e2e2e] border border-[#CAB485] 
             font-medium py-2 px-6 rounded-md transition duration-300 cursor-pointer 
             bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] 
             bg-clip-text text-transparent">
                {loading ? "Adding..." : "Add Moderator"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModarator;
