import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";

export default function ItemCard() {
  const { cartItems } = useAppContext();
  const itemQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className=" fixed top-2/6 right-4 z-50">
      <Link
        href="/order"
        className="" // 👈 fixed to top-right
      >
        <TbShoppingBagPlus className="w-8 h-8 text-[#d6b36b] hover:text-[#cbb688] cursor-pointer" />
        {itemQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemQuantity}
          </span>
        )}
      </Link>
    </div>
  );
}
