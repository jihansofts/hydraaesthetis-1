"use client";

import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const OrderPage: React.FC = () => {
  const {
    cartItems,
    userDetails,
    updateUserDetails,

    removeItem,
    cartTotal,
  } = useAppContext();

  const [formData, setFormData] = useState(userDetails);
  const router = useRouter();

  const handleCheckout = () => {
    updateUserDetails(formData);

    // Store data in sessionStorage before redirecting
    sessionStorage.setItem("userDetails", JSON.stringify(formData));
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

    router.push("/checkout");
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 min-h-screen bg-[#252525] text-white">
      <div className="max-w-6xl mx-auto mt-10">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-xl mb-4">Your cart is empty</p>
            <Link
              href="/#vitamins"
              className="inline-block bg-[#C4AC7B] text-white py-2 px-6 rounded-md font-medium">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left - Form Section */}
              <div className=" p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Provide Information</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-[20px] font-font font-inter mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full bg-[#2E2E2E] rounded-md p-3 text-white placeholder:text-gray-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[20px] font-font font-inter mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full bg-[#2E2E2E] rounded-md p-3 text-white placeholder:text-gray-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[20px] font-font font-inter mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="w-full bg-[#2E2E2E] rounded-md p-3 text-white placeholder:text-gray-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[20px] font-font font-inter mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      placeholder="Date"
                      className="w-full bg-[#2E2E2E] rounded-md p-3 text-white placeholder:text-gray-400 focus:outline-none"
                      required
                    />
                  </div>
                </form>
              </div>

              {/* Right - Summary Section */}
              <div className="bg-[#2E2E2E] p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Summary</h2>
                <div className="space-y-3">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#3A3A3A] rounded-md p-3 flex justify-between items-center text-sm">
                      <span className="font-semibold">{item.title}</span>
                      <span>X{item.quantity}</span>
                      <span className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-[#CAB485] cursor-pointer hover:text-red-300 ml-2"
                        aria-label="Remove item">
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 mt-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="flex items-center justify-center mt-10">
              <button
                onClick={handleCheckout}
                className="border cursor-pointer border-[#CAB485] text-[#CAB485] hover:bg-[#CAB485] hover:text-black px-6 py-2 rounded-md transition-all">
                Proceed To Check Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
