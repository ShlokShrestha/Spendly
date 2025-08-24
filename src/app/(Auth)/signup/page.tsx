"use client";
import SignUp from "@/components/Auth/SignUp";
import { SignUpFormValues } from "@/interface/interface";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const handleSignUp = async (data: SignUpFormValues) => {
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
    }
  };
  return (
    <>
      <SignUp
        handleSubmit={handleSubmit}
        errors={errors}
        control={control}
        handleSignUp={handleSignUp}
      />
    </>
  );
}
