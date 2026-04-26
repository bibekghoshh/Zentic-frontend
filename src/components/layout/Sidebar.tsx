"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Calendar } from "lucide-react";
import { useUIStore } from "../../store/uiStore";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Employees", href: "/employees", icon: Users },
  { name: "Scheduling", href: "/scheduling", icon: Calendar },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen } = useUIStore();

  return (
    <aside
      className={`h-screen border-r bg-white p-4 transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-20"
      } hidden md:block`}
    >
      <h1 className="font-bold text-lg mb-6">
        {sidebarOpen ? "ShiftFlow" : "SF"}
      </h1>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                pathname === link.href
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {sidebarOpen && <span>{link.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}