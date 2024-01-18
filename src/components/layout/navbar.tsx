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
      { title: "Comparison", href: "/why-vid-plus/comparison" },
      { title: "Benchmark", href: "/why-vid-plus/benchmark" },
    ],
  },
  {
    title: "Features",
    options: [
      { title: "Tech Stack", href: "/features/tech-stack" },
      { title: "Security", href: "/features/security" },
      { title: "Data & Privacy", href: "/features/data-privacy" },
      { title: "Reliability", href: "/features/reliability" },
    ],
  },
  {
    title: "Platforms",
    options: [
      { title: "iOS", href: "/platforms/ios" },
      { title: "Android", href: "/platforms/android" },
      { title: "OSX", href: "/platforms/osx" },
      { title: "Windows", href: "/platforms/windows" },
    ],
  },
  {
    title: "Pricing",
    mainHref: "/pricing",
  },
];

export default function NavBar() {
  return (
    <section className="fixed z-10 flex w-full items-center justify-between bg-indigo-600 px-24 py-8 text-white shadow-md backdrop-blur-xl">
      <Link href="/" className="flex gap-2 hover:opacity-80 active:opacity-60">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/922/922672.png"
          width={30}
          height={30}
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
      <Flex align="center" gap="6">
        <Button className={style.button} variant="ghost">
          Log In
        </Button>
        <Button
          style={{
            padding: "20px 30px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          }}
          size="3"
          variant="solid"
        >
          Free Trial
        </Button>
      </Flex>
    </section>
  );
}
