import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "./authStore";
import { getMe } from "../features/auth/auth.service";

export const useCurrentUser = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await getMe();
      setUser(res.user);
      return res;
    },
    retry: false,
  });
};