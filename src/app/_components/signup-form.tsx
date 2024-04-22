"use client";

import { Flex } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "@/schemas/auth";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoCircledIcon, TokensIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { hash } from "bcryptjs";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });
  const router = useRouter();

  const createMutation = api.user.create.useMutation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    const hashedPassword = await hash(data.password, 10);
    setIsLoading(true);
    createMutation.mutate(
      { ...data, password: hashedPassword },
      {
        onSuccess: () => {
          alert("User created successfully");
          router.push("/login");
        },
        onError: (error) => {
          alert(error.message);
        },
      },
    );
    setIsLoading(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="row" gap="4" align="center" justify="center">
        <div className="flex flex-col items-start gap-2">
          <div>
            <label className="font-medium">Name</label>
            <input
              {...register("name")}
              type="text"
              required
              className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
            />
          </div>
          {errors.name && (
            <p className="flex items-center gap-1 text-xs text-red-500">
              <InfoCircledIcon className="h-4 w-4" />
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <div>
            <label className="font-medium">Last Name</label>
            <input
              {...register("lastName")}
              type="text"
              required
              className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
            />
          </div>
          {errors.lastName && (
            <p className="flex items-center gap-1 text-xs text-red-500">
              <InfoCircledIcon className="h-4 w-4" />
              {errors.lastName.message}
            </p>
          )}
        </div>
      </Flex>
      <div>
        <label className="font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          required
          className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
        />
      </div>
      {errors.email && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          <InfoCircledIcon className="h-4 w-4" />
          {errors.email.message}
        </p>
      )}
      <div>
        <label className="font-medium">Password</label>
        <input
          {...register("password")}
          type="password"
          required
          className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
        />
      </div>
      {errors.password && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          <InfoCircledIcon className="h-4 w-4" />
          {errors.password.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="text-cent mt-4 flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600"
      >
        {isLoading ? (
          <TokensIcon className="h-5 w-5 animate-spin opacity-70" />
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  );
}
