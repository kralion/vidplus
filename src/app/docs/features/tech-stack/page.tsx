import { Heading } from "@radix-ui/themes";
import React from "react";
import "animate.css";

export default function Page() {
  return (
    <div className="flex items-center gap-2">
      <Heading
        className="animate__animated animate__fadeInLeft "
        size="9"
        weight="bold"
      >
        Tech Stack
      </Heading>
      <span className="animate-in fade-in-50 duration-400 rounded-full border border-purple-500 bg-gradient-to-t from-purple-600 to-indigo-600 px-2 text-white">
        Comming Soon
      </span>
    </div>
  );
}
