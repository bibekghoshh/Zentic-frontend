"use client";

import { useUIStore } from "../../store/uiStore";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const { sidebarOpen, toggleSidebar } = useUIStore();

  if (!sidebarOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={toggleSidebar}
      />
      <div className="relative w-64 h-full bg-white shadow">
        <Sidebar />
      </div>
    </div>
  );
}