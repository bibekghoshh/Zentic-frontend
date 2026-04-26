// src/app/employees/page.tsx
import EmployeeForm from "../../features/employees/EmployeeForm";
import EmployeeList from "../../features/employees/EmployeeList";
import ProtectedRoute from "../../components/ProtectedRoute";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function EmployeesPage() {
    return (
        <ProtectedRoute>
            <DashboardLayout>
                <div className="space-y-6">
                    <h1 className="text-2xl font-bold">Employees</h1>
                    <EmployeeForm />
                    <EmployeeList />
                </div>
            </DashboardLayout>
        </ProtectedRoute>
    );
}