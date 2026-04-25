import { api } from "../../lib/api";

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data; // cookies already set
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const getMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const logoutUser = async () => {
  await api.post("/auth/logout"); // clears cookies
};

export const refreshToken = async () => {
  const res = await api.post("/auth/refresh");
  return res.data;
};