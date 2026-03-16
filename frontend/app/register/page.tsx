"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await api.post("/auth/register", {
        email,
        password,
      });

      router.push("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          className="border w-full p-2 mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border w-full p-2 mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="bg-green-500 text-white w-full p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}
