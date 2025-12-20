"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { LoginFormValues, UseFormProps } from "@/interface/interface";
import { Controller } from "react-hook-form";
import Spinner from "../Spinner";
import Image from "next/image";
import ExpensesImage from "../../assets/login.png";

interface LoginProps extends UseFormProps<LoginFormValues> {
  handleLogin: (data: LoginFormValues) => void;
  loading: boolean;
}
export default function Login({
  handleSubmit,
  errors,
  control,
  handleLogin,
  loading,
}: LoginProps) {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="grid md:grid-cols-2 sm:grid-cols-1 md:py-10 py-6 md:w-fit w-full mx-4">
        <Image
          src={ExpensesImage}
          alt="ExpensesImage"
          className="lg:w-100 md:w-80 md:block hidden h-fit"
        />
        <div className="w-full ">
          <div className="flex flex-col items-center text-center mb-4">
            <h1 className="text-2xl font-bold text-blue-800">Welcome back</h1>
            <p className="text-xl">
              Login to your Spendly
            </p>
          </div>
          <CardContent>
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Enter email"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      placeholder="Enter password"
                    />
                  )}
                />
                {errors.password && (
                  <p className="text-red-400 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Link
                href="#"
                className="flex justify-end text-sm underline-offset-4 hover:underline text-right"
              >
                Forgot your password?
              </Link>
              <Button type="submit" className="w-full bg-blue-800">
                {loading ? <Spinner /> : ""} Login
              </Button>
            </form>
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Don't have an account?{" "}
              </span>
              <Link
                href="/signup"
                className="text-sm text-blue-800 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
