import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
const NavLinks = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Profile", href: "/profile" },
];

export default function NavBar() {
  return (
    <div className="flex gap-4 p-10">
      {NavLinks.map((link) => (
        <Link key={link.title} href={link.href}>
          <Button variant="classic">{link.title}</Button>
        </Link>
      ))}
    </div>
  );
}
