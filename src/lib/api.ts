import axios from "axios";
import { refreshToken } from "../features/auth/auth.service";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await refreshToken(); // get new access token
        return api(originalRequest); // retry original request
      } catch (err) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);