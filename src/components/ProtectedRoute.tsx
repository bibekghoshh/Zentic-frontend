"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../features/auth/useAuth";

export default function ProtectedRoute({ children }: any) {
  const { data, isLoading, isError } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      router.push("/login");
    }
  }, [isError]);

  if (isLoading) return <p>Loading...</p>;

  return children;
}