import NavBar from "@/components/layout/navbar";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        {children}
      </div>
    </>
  );
}
