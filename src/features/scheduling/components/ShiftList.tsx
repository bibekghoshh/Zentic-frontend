"use client";

import { useShifts } from "../hooks/useShifts";

export default function ShiftList() {
  const { data, isLoading, isError } = useShifts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      {data?.map((shift) => (
        <div key={shift.id}>
          {shift.employeeName} - {shift.start}
        </div>
      ))}
    </div>
  );
}