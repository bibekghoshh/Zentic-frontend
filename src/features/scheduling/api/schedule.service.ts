// schedule.service.ts
import { api } from "../../../lib/api";

export const getShifts = async () => {
  const res = await api.get("/shifts");
  return res.data;
};

export const updateShift = async (id: number, data: any) => {
  const res = await api.put(`/shifts/${id}`, data);
  return res.data;
};

export const createShift = async (data: any) => {
  const res = await api.post("/shifts", data);
  return res.data;
};