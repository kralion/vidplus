import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";

import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { Theme } from "@radix-ui/themes";
import NavBar from "@/components/layout/navbar";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-Roboto bg-background">
        <Theme accentColor="iris" grayColor="sand" radius="full" scaling="95%">
          <TRPCReactProvider cookies={cookies().toString()}>
            <NavBar />
            <hr className="mx-24 rounded-full border-[1px] border-[#6704E7]" />
            {children}
          </TRPCReactProvider>
        </Theme>
      </body>
    </html>
  );
}
