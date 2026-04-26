// src/features/employees/EmployeeForm.tsx
"use client";

import { useState } from "react";
import { useCreateEmployee } from "./useEmployees";

export default function EmployeeForm() {
  const { mutate, isPending } = useCreateEmployee();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !email || !role) {
      alert("All fields required");
      return;
    }

    mutate({ name, email, role });

    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl space-y-3">
      <h2 className="font-semibold text-lg">Add Employee</h2>

      <input
        placeholder="Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Role (Manager, Staff...)"
        className="w-full p-2 border rounded"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button className="bg-black text-white px-4 py-2 rounded w-full">
        {isPending ? "Adding..." : "Add Employee"}
      </button>
    </form>
  );
}