// src/features/employees/EmployeeList.tsx
"use client";

import { useEmployees } from "./useEmployees";

export default function EmployeeList() {
  const { data, isLoading } = useEmployees();

  if (isLoading) return <p>Loading employees...</p>;

  return (
    <div className="space-y-3">
      {data?.map((emp: any) => (
        <div
          key={emp.id}
          className="p-4 border rounded-xl flex justify-between"
        >
          <div>
            <p className="font-semibold">{emp.name}</p>
            <p className="text-sm text-gray-500">{emp.email}</p>
          </div>
          <span className="text-sm">{emp.role}</span>
        </div>
      ))}
    </div>
  );
}