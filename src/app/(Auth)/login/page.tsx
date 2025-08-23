"use client";
import LoginComponent from "@/components/Auth/Login";
import { LoginFormValues } from "@/interface/interface";
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
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (data: LoginFormValues) => {
    try {
      const res = await axios.post("/api/auth/login/", data);
      if (res.status === 200) {
        router.replace("/");
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
      <LoginComponent
        handleSubmit={handleSubmit}
        errors={errors}
        control={control}
        handleLogin={handleLogin}
      />
    </>
  );
}
