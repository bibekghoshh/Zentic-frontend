// useSchedule.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getShifts, updateShift, createShift } from "../api/schedule.service";

export const useShifts = () => {
  return useQuery({
    queryKey: ["shifts"],
    queryFn: getShifts,
  });
};

export const useUpdateShift = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: any) => updateShift(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["shifts"] }),
  });
};

export const useCreateShift = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createShift,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["shifts"] }),
  });
};