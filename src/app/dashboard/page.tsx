"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/login");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
