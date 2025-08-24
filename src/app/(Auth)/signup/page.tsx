"use client";
import SignUp from "@/components/Auth/SignUp";
import { SignUpFormValues } from "@/interface/interface";
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
  } = useForm<SignUpFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const handleSignUp = async (data: SignUpFormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Server error");
      }
      router.replace("/login");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SignUp
        handleSubmit={handleSubmit}
        errors={errors}
        control={control}
        handleSignUp={handleSignUp}
        loading={loading}
      />
    </>
  );
}
