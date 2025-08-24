"use client";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { SignUpFormValues, UseFormProps } from "@/interface/interface";
import Spinner from "../Spinner";
interface SignUpProps extends UseFormProps<SignUpFormValues> {
  handleSignUp: (data: SignUpFormValues) => void;
  loading: boolean;
}

const SignUp = ({
  handleSubmit,
  errors,
  control,
  handleSignUp,
  loading,
}: SignUpProps) => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-balance">
            Sign Up to your Spendly
          </p>
        </div>
        <CardContent>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Controller
                name="fullName"
                control={control}
                rules={{
                  required: "Full Name is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="username"
                    placeholder="Enter fullName"
                  />
                )}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
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
                <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              {loading ? <Spinner /> : ""} Sign Up
            </Button>
          </form>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
            </span>
            <Link href="/login" className="text-sm text-black hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default SignUp;
