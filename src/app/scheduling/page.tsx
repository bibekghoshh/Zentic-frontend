// src/app/scheduling/page.tsx

import DashboardLayout from "../../components/layout/DashboardLayout";
import ProtectedRoute from "../../components/ProtectedRoute";
import ScheduleCalendar from "../../features/scheduling/components/ScheduleCalendar";

export default function SchedulingPage() {
  return (
    // <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-2xl font-bold mb-6">Scheduling</h1>
        <ScheduleCalendar />
      </DashboardLayout>
    // </ProtectedRoute>
  );
}