import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-600 to-pink-900 py-2">
      {children}
    </div>
  );
}
