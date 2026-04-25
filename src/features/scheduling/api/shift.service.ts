import { api } from "../../../lib/api";
import { Shift } from "../types";

export const getShifts = async (): Promise<Shift[]> => {
  const res = await api.get("/shifts");
  return res.data;
};
