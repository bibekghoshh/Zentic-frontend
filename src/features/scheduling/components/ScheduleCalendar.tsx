// ScheduleCalendar.tsx
"use client";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useShifts, useUpdateShift, useCreateShift } from "../hooks/useSchedule";

export default function ScheduleCalendar() {
  const { data } = useShifts();
  const updateShift = useUpdateShift();
  const createShift = useCreateShift();

  // convert backend → calendar format
  const events =
    data?.map((shift: any) => ({
      id: shift.id,
      title: shift.employeeName,
      start: shift.start,
      end: shift.end,
    })) || [];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        events={events}

        // 🔥 Drag & Drop
        eventDrop={(info) => {
          updateShift.mutate({
            id: info.event.id,
            data: {
              start: info.event.start,
              end: info.event.end,
            },
          });
        }}

        // 🔥 Create new shift
        select={(info) => {
          createShift.mutate({
            start: info.start,
            end: info.end,
            employeeId: 1, // temp (later dynamic)
          });
        }}
      />
    </div>
  );
}