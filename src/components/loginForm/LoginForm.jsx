"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function LoginForm({ onSignUpClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    router.push("/jobs");
  };

  return (
    <form className="space-y-5 lg:space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-medium">LOGIN</h1>

      <div className="flex flex-col gap-2 w-[50%] mx-auto">
        <label className="text-start" htmlFor="email">
          Email
        </label>
        <input
          className="border-2 px-2"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-2 w-[50%] mx-auto">
        <label className="text-start" htmlFor="password">
          Password
        </label>
        <input
          className="border-2 px-2"
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button className="border-2 cursor-pointer w-[50%] py-0.5" type="submit">
        Login
      </button>

      <p>
        Don’t have an account?{" "}
        <span className="cursor-pointer text-blue-500" onClick={onSignUpClick}>
          Register now!
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
