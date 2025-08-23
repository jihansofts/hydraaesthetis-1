"use client";
import React, { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface DataProps {
  _id: string; // assuming your API returns an id for delete
  name: string;
  email: string;
  phone?: string;
}

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user/moderator");

      if (res.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "Only Admins can add a moderator.",
        });
        router.push("/admin");
        return;
      }

      if (!res.ok) {
        throw new Error("Failed to load moderators");
      }

      const result = await res.json();
      setData(result.users);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error instanceof Error ? error.message : "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 🗑️ Delete handler with SweetAlert2
  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        // ✅ Call your API to delete
        const res = await fetch(`/api/user/moderator/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Failed to delete moderator");
        }

        // ✅ Remove from UI immediately
        setData((prev) => prev.filter((item) => item._id !== id));

        Swal.fire("Deleted!", "Moderator has been deleted.", "success");
      } catch (error) {
        Swal.fire("Admin Can not be deleted" + error);
      }
    }
  };

  return (
    <div className="bg-[#252525] min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <h3 className="text-xl sm:text-4xl font-bold text-white">
          All Moderators
        </h3>

        <div className="mt-4 shadow-sm rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left border-separate border-spacing-y-3">
            <thead className="text-white font-medium">
              <tr className="bg-[#2E2E2E] rounded-lg shadow-sm">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    Loading...
                  </td>
                </tr>
              ) : data.length > 0 ? (
                data.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-[#2E2E2E] rounded-lg shadow-sm">
                    <td className="px-6 py-4 rounded-l-lg">{item.name}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.phone || "N/A"}</td>
                    <td className="px-6 py-4 rounded-r-lg">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-3 cursor-pointer py-1 bg-red-500 rounded-lg text-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    No moderators found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
