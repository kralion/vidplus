"use client";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex h-screen flex-col  items-center justify-center gap-3 text-center">
      <Heading size="7">404</Heading>
      <Text>Page not found</Text>
      <Image
        src="https://img.freepik.com/premium-vector/search-error-concept-illustration_598748-166.jpg?w=740"
        alt="404"
        width={500}
        height={500}
      />
      <Button variant="soft" onClick={goBack}>
        <ArrowLeftIcon /> Go back
      </Button>
    </div>
  );
}
