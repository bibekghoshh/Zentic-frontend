import { useMutation, useQuery } from "@tanstack/react-query";
import { loginUser, registerUser, getMe } from "./auth.service";
import { useAuthStore } from "../../store/authStore";

export const useLogin = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data.user);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const useCurrentUser = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await getMe();
      setUser(res.user);
      return res.user;
    },
    retry: false,
  });
};

export const useLogout = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      setUser(null);
      window.location.href = "/login";
    },
  });
};