"use client";
import { SignInSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnvelopeClosedIcon,
  InfoCircledIcon,
  LockClosedIcon,
  TokensIcon,
} from "@radix-ui/react-icons";
import { AlertDialog, Flex, TextField, Button, Link } from "@radix-ui/themes";
import "animate.css";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import DiscordSVG from "@/assets/svg/discord-svgrepo-com.svg";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingDiscord, setIsLoadingDiscord] = useState<boolean>(false);

  async function handleDiscordLogin() {
    setIsLoadingDiscord(true);
    const response = await signIn("discord", {
      callbackUrl: "/vidplus/dashboard",
    });
    if (response?.error) {
      alert(response.error);
    }
  }
  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    setIsLoading(true);
    const result = signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/vidplus/dashboard",
      redirect: true,
    });
    router.push("/vidplus/dashboard");
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center px-4 duration-300 animate-in fade-in-0">
      <div className="w-full max-w-sm space-y-6 text-gray-600">
        <div className="text-center">
          <Link href="/">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3845/3845856.png"
              width={70}
              priority
              height={70}
              alt="VidPlus"
              className="animate__animated animate__fadeIn animate__delay-0.5s mx-auto cursor-pointer rounded-full     shadow-lg hover:bg-zinc-100 active:opacity-70"
            />
          </Link>
          <div className="mt-5 space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 ">
              Log in to your account
            </h3>
            <p className="">
              Don&apos;t have an account?{" "}
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500"
                href="/sign-up"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label className="font-medium">Email</label>
            <TextField.Root className=" px-1">
              <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input
                size="3"
                {...register("email")}
                placeholder="jhondoe@vidplus.com"
              />
            </TextField.Root>
          </div>

          {errors.email && (
            <p className="flex items-center gap-1 text-xs text-red-500">
              <InfoCircledIcon className="h-4 w-4" />
              {errors.email.message}
            </p>
          )}
          <div className="space-y-2">
            <label className="font-medium">Password</label>
            <TextField.Root className="px-1">
              <TextField.Slot>
                <LockClosedIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input
                type="password"
                size="3"
                {...register("password")}
              />
            </TextField.Root>
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
              "Log in"
            )}
          </button>
        </form>
        <div className="relative">
          <span className="block h-px w-full bg-gray-300"></span>
          <p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-white px-2 text-sm">
            Or continue with
          </p>
        </div>
        <Button
          className=" w-full"
          variant="outline"
          onClick={handleDiscordLogin}
        >
          {isLoadingDiscord ? (
            <TokensIcon className="h-5 w-5 animate-spin opacity-70" />
          ) : (
            <Image
              src={DiscordSVG as string}
              width={20}
              height={20}
              alt="Discord"
            />
          )}
          Continue with Discord
        </Button>

        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Link
              color="indigo"
              className="flex w-full justify-center text-center text-sm"
            >
              Forgot password?
            </Link>
          </AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 450 }}>
            <AlertDialog.Title>Password Recovery</AlertDialog.Title>
            <AlertDialog.Description size="2">
              We will send you an email to reset your password to the email
              registered in your account.
            </AlertDialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="solid" color="red">
                  Send
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </main>
  );
}
