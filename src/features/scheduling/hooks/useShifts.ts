// hooks/useShifts.ts
import { useQuery } from "@tanstack/react-query";
import { getShifts } from "../api/shift.service";
import { schedulingKeys } from "../queryKeys";

export const useShifts = () => {
  return useQuery({
    queryKey: schedulingKeys.shifts(),
    queryFn: getShifts,
    staleTime: 1000 * 60 * 5, // 5 min
  });
};