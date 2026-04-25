"use client";

import { useState } from "react";
import { useLogin } from "./useAuth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { mutate, isPending } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-20">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-black text-white p-2"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>
      <p className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => router.push("/register")}
        >
          Register
        </span>
      </p>
    </form>
  );
}