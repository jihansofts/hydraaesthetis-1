"use client";

import { IoLockClosedOutline } from "react-icons/io5";

export default function LogoutButton() {
  const logout = () => {
    // 1. Clear cookie by expiring it
    document.cookie = "token=; path=/; max-age=0; SameSite=Lax";

    // 2. Clear localStorage
    localStorage.removeItem("token");

    // 3. Redirect to login page
    window.location.href = "/login";
  };

  return (
    <button onClick={logout} className="col-span-1 flex gap-x-3 relative">
      <span className="text-gradient text-[16px] font-bold font-inter cursor-pointer">
        Lock Out
      </span>
      <IoLockClosedOutline className="w-6 h-6 text-[#d6b36b] hover:text-[#cbb688] cursor-pointer" />
    </button>
  );
}
