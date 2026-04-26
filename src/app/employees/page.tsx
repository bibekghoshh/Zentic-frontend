// src/app/employees/page.tsx
import EmployeeForm from "../../features/employees/EmployeeForm";
import EmployeeList from "../../features/employees/EmployeeList";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function EmployeesPage() {
  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto py-10 px-4 space-y-6">
        <h1 className="text-2xl font-bold">Employees</h1>

        <EmployeeForm />
        <EmployeeList />
      </div>
    </ProtectedRoute>
  );
}