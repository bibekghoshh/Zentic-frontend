// src/app/dashboard/page.tsx

import DashboardLayout from "../../components/layout/DashboardLayout";
// import ProtectedRoute from "../../components/ProtectedRoute";

export default function DashboardPage() {
  return (
    // <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-2xl font-bold">Welcome to Dashboard 🚀</h1>
      </DashboardLayout>
    // </ProtectedRoute>
  );
}