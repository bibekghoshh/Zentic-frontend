// src/features/employees/employee.service.ts
import { api } from "../../lib/api";

export const getEmployees = async () => {
  const res = await api.get("/employees");
  return res.data;
};

export const createEmployee = async (data: {
  name: string;
  email: string;
  role: string;
}) => {
  const res = await api.post("/employees", data);
  return res.data;
};