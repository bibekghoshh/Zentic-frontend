"use client";

import { useState } from "react";
import { useRegister } from "./useAuth";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const { mutate, isPending, isError, error } = useRegister();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) return alert("Name is required");
    if (!email.includes("@")) return alert("Invalid email");
    if (password.length < 6)
      return alert("Password must be at least 6 characters");

    mutate(
      { name, email, password },
      {
        onSuccess: () => {
          router.push("/login");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center">Create Account</h2>

      {isError && (
        <p className="text-red-500 text-sm text-center">
          {(error as any)?.response?.data?.message || "Registration failed"}
        </p>
      )}

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-black text-white p-2 rounded disabled:opacity-50"
      >
        {isPending ? "Creating account..." : "Register"}
      </button>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login
        </span>
      </p>
    </form>
  );
}