"use client";
import LoginComponent from "@/components/Auth/Login";
import { LoginFormValues } from "@/interface/interface";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (data: LoginFormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Server error");
      }
      router.replace("/");
    } catch (err: any) {
      toast.error(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <LoginComponent
        handleSubmit={handleSubmit}
        errors={errors}
        control={control}
        handleLogin={handleLogin}
        loading={loading}
      />
    </>
  );
}
