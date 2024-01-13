import { Button, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
const NavLinks = [
  { title: "Why Vid Plus", href: "/why-vid-plus" },
  { title: "Features", href: "/features" },
  { title: "Platforms", href: "/platform" },
  { title: "Pricing", href: "/pricing" },
];

export default function NavBar() {
  return (
    <section className="flex items-center justify-between px-24 py-8 text-white">
      <div className="flex gap-2">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/922/922672.png"
          width={30}
          height={30}
          alt="logo"
        />
        <h1 className="text-3xl font-extrabold tracking-tight">Vidplus</h1>
      </div>
      <div className="flex gap-6 ">
        {NavLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            <Button variant="ghost">
              {link.title}
              <ChevronDownIcon />
            </Button>
          </Link>
        ))}
      </div>
      <Flex align="center" gap="6">
        <Button variant="ghost">Log In</Button>
        <Button
          style={{
            padding: "20px 30px",
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
