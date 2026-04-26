"use client";

import { useAuthStore } from "../../store/authStore";
import { useUIStore } from "../../store/uiStore";
import { Menu, Bell } from "lucide-react";

export default function Navbar() {
    const user = useAuthStore((s) => s.user);
    const { toggleSidebar } = useUIStore();

    return (
        <div className="h-16 border-b flex items-center justify-between px-6 bg-white">
            <h2 className="font-semibold">Dashboard</h2>

            {/* LEFT */}
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className="md:hidden">
                    <Menu />
                </button>

                <input
                    placeholder="Search..."
                    className="border px-3 py-1 rounded-lg text-sm"
                />
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Bell className="cursor-pointer" />
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                        {user?.name || "User"}
                    </span>

                    <div className="w-8 h-8 bg-gray-300 rounded-full" />
                </div>
            </div>


        </div>
    );
}