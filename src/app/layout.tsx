import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { Theme } from "@radix-ui/themes";

export const metadata = {
  title: "VidPlus",
  description: "Vid plus SASS product backbone with modern tech stack",
  icons: [
    {
      rel: "icon",
      url: "https://cdn-icons-png.flaticon.com/128/6268/6268670.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" font-Roboto">
        <Theme accentColor="iris" grayColor="sand" radius="large" scaling="95%">
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
          </TRPCReactProvider>
        </Theme>
      </body>
    </html>
  );
}
