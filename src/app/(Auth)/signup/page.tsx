"use client";
import SignUp from "@/components/Auth/SignUp";
import { SignUpFormValues } from "@/interface/interface";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

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
      const res = await axios.post("/api/auth/signup/", data);
      if (res.status === 201) {
        router.replace("/login");
      }
    } catch (err: any) {
      if (err.response?.data?.field && err.response?.data?.message) {
        setError(err.response.data.field, {
          type: "manual",
          message: err.response.data.message,
        });
      } else {
        setError("email", {
          type: "manual",
          message: err.response?.data?.error || "Server error",
        });
      }
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
