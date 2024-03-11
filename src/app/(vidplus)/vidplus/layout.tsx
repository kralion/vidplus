import React from "react";
import NavBar from "../../_components/navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center gap-3">
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-center  py-2">
        {children}
      </div>
    </div>
  );
}
