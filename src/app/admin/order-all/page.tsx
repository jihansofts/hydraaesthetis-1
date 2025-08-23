"use client";
import React, { useEffect, useState } from "react";

// --- API TYPES ---
type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

type UserDetail = {
  _id?: string; // optional, not always returned
  name: string;
  email: string;
  phone: string;
  date: string;
};

type OrderItem = {
  _id: string;
  paypalOrderId: string;
  userDetail: UserDetail;
  cartItems: CartItem[];
  total: number;
  status: "PAID" | "PENDING" | "FAILED";
  createdAt: string;
  updatedAt: string;
};

type OrdersResponse = {
  orders: OrderItem[];
  total: number;
  totalPages: number;
};

// --- UI FLATTENED TYPE ---
interface Order {
  _id: string;
  name: string;
  product: string;
  date: string;
  email: string;
  phone: string;
  price: number;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/allorder?limit=10&page=${pageNum}`);
      const data: OrdersResponse = await res.json();

      // transform each order into flat structure
      const mapped: Order[] = data.orders.map((order) => ({
        _id: order._id,
        name: order.userDetail.name,
        email: order.userDetail.email,
        phone: order.userDetail.phone,
        date: order.userDetail.date,
        product: order.cartItems
          .map((c) => `${c.name} (x${c.quantity})`)
          .join(", "),
        price: order.total,
      }));

      setOrders((prev) => [...prev, ...mapped]);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(1);
  }, []);

  const handleLoadMore = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchOrders(nextPage);
    }
  };

  return (
    <div className="bg-[#252525] min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <h3 className="text-xl sm:text-4xl font-bold text-white">All Orders</h3>

        <div className="mt-4 shadow-sm rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left border-separate border-spacing-y-3">
            <thead className="text-white font-medium">
              <tr className="bg-[#2E2E2E] rounded-lg shadow-sm">
                <th className="px-6 py-4 rounded-tl-lg rounded-bl-lg">Name</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4 rounded-tr-lg rounded-br-lg">Price</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {orders.map((item, index) => (
                <tr key={index} className="bg-[#2E2E2E] rounded-lg shadow-sm">
                  <td className="px-6 py-4 rounded-l-lg">{item.name}</td>
                  <td className="px-6 py-4">{item.product}</td>
                  <td className="px-6 py-4">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4 rounded-r-lg">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More Button */}
        {page < totalPages && !loading && (
          <div className="mx-auto mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="text-[16px] cursor-pointer gradient-border font-bold text-gradient px-8 py-4 rounded-lg">
              Load More Orders
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && <p className="text-center text-white mt-4">Loading...</p>}
      </div>
    </div>
  );
}
