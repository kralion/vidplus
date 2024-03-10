"use client";
import { Button, DropdownMenu, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import style from "@/styles/navbar.module.css";

type TNavLinks = {
  title: string;
  options?: { title: string; href: string }[];
  mainHref?: string;
}[];

const NavLinks: TNavLinks = [
  {
    title: "Why Vid Plus",
    options: [
      { title: "Comparison", href: "/docs/why-vid-plus/comparison" },
      { title: "Benchmark", href: "/docs/why-vid-plus/benchmark" },
    ],
  },
  {
    title: "Features",
    options: [
      { title: "Tech Stack", href: "/docs/features/tech-stack" },
      { title: "Security", href: "/docs/features/security" },
      { title: "Data & Privacy", href: "/docs/features/data-privacy" },
      { title: "Reliability", href: "/docs/features/reliability" },
    ],
  },
  {
    title: "Platforms",
    options: [
      { title: "iOS", href: "/docs/platforms/ios" },
      { title: "Android", href: "/docs/platforms/android" },
      { title: "OSX", href: "/docs/platforms/osx" },
      { title: "Windows", href: "/docs/platforms/windows" },
    ],
  },
  {
    title: "Pricing",
    mainHref: "/docs/pricing",
  },
];

export default function NavBar() {
  return (
    <section className="fixed z-10 flex w-full items-center justify-between bg-indigo-600 px-24 py-4 text-white shadow-md backdrop-blur-xl">
      <Link
        href="/"
        className="flex items-center gap-2 hover:opacity-80 active:opacity-60"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/128/3845/3845856.png"
          width={40}
          height={40}
          alt="logo"
        />
        <h1 className="text-3xl font-extrabold tracking-tight">Vidplus</h1>
      </Link>

      <div className="flex gap-6 ">
        {NavLinks.map((link) => (
          <DropdownMenu.Root key={link.title}>
            {link.mainHref ? (
              <Link href={link.mainHref}>
                <Button className={style.button} variant="ghost">
                  {link.title}
                </Button>
              </Link>
            ) : (
              <DropdownMenu.Trigger>
                <Button className={style.button} variant="ghost">
                  {link.title}
                  <ChevronDownIcon />
                </Button>
              </DropdownMenu.Trigger>
            )}
            <DropdownMenu.Content variant="soft" color="iris">
              {link.options?.map((option) => (
                <DropdownMenu.Item key={option.title}>
                  <Link href={option.href}>{option.title}</Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        ))}
      </div>
      <Flex align="center" gap="3">
        <Link href="/login">
          <Button
            className={` hover:opacity-70 ${style.button}`}
            variant="soft"
          >
            Log In
          </Button>
        </Link>
        <Link href="/login">
          <Button
            style={{
              padding: "20px 30px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
            size="3"
            radius="full"
            variant="solid"
          >
            Free Trial
          </Button>
        </Link>
      </Flex>
    </section>
  );
}
