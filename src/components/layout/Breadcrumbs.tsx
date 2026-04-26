"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-500 mb-4">
      {segments.map((seg, i) => (
        <span key={i}>
          {seg}
          {i < segments.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
}