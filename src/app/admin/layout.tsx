// app/admin/layout.tsx
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@/common/Button";
import { getUserFromToken } from "@/lib/auth";
import LogoutButton from "@/common/LogoutButton";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Get user from cookies (works in layouts)
  const user = await getUserFromToken();
  console.log(user, "user");

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col bg-[#252525]">
      {/* Topbar */}
      <div className="bg-[#2E2E2E] w-full">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-16 py-8">
          <div className="text-2xl font-bold text-white">
            <Link href="/" className="hover:text-[#d6b36b]">
              <div className="flex items-center gap-x-4 justify-start">
                <Image
                  src="/images/logo.svg"
                  alt="Hydra Aesthetics"
                  width={150}
                  height={150}
                  className="w-24 h-24"
                />
                <h2 className="text-2xl hidden md:flex font-bold bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  Hydra Aesthetics
                </h2>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <h3 className="text-[32px] font-inter font-bold text-white">
              Admin Panel
            </h3>
          </div>

          <div className="flex justify-center items-center space-x-5">
            <LogoutButton />
            <div className="hidden md:flex">
              <Link href="/admin/order-all">
                <Button text=" Check Orders" borderLeanr="gradient-border" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col md:flex-col sm:flex-col items-center justify-center gap-8 py-8 bg-[#1f1f1f]">
        <Link
          href="/admin"
          className="text-[20px] font-inter font-bold text-[#d6b36b] hover:text-[#cbb688] cursor-pointer">
          Add Product
        </Link>
        <Link
          href="/admin/product-all"
          className="text-[20px] font-inter font-bold text-[#d6b36b] hover:text-[#cbb688] cursor-pointer">
          Product List
        </Link>
        <Link
          href="/admin/moderator"
          className="text-[20px] font-inter font-bold text-[#d6b36b] hover:text-[#cbb688] cursor-pointer">
          Add Moderator
        </Link>
        <Link
          href="/admin/moderator-all"
          className="text-[20px] font-inter font-bold text-[#d6b36b] hover:text-[#cbb688] cursor-pointer">
          Moderator List
        </Link>
        {/* <Link
        {/* <Link
          href="/about"
          className="text-[20px] font-inter font-bold text-[#d6b36b] hover:text-[#cbb688] cursor-pointer"
        >
          About
        </Link> */}
      </div>
      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
