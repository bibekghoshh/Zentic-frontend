// queryKeys.ts
export const schedulingKeys = {
  all: ["scheduling"] as const,
  shifts: () => [...schedulingKeys.all, "shifts"] as const,
};