"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import Breadcrumbs from "./Breadcrumbs";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-50">

            {/* Sidebar */}
            <Sidebar />
            <MobileSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">

                {/* Top Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className="p-6 overflow-y-auto flex-1">
                    <Breadcrumbs />
                    {children}
                </main>

            </div>
        </div>
    );
}