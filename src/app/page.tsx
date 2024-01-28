import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center gap-12 bg-white/40  text-white ">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/6268/6268670.png"
          width={100}
          height={100}
          alt="VidPlus"
          className="animate__animated animate__fadeIn animate__delay-0.5s  rounded-full  border-2 border-pink-400 p-2"
        />
        <h1 className="text-5xl font-extrabold tracking-tight text-indigo-400 sm:text-[5rem]">
          Vid<span className="text-[hsl(280,100%,70%)]">Plus</span>
        </h1>
        <Flex className="gap-4">
          <Link href="/docs">
            <Button variant="outline" size="4">
              Demo
            </Button>
          </Link>
          <Link href="/login">
            <Button size="4" className="group">
              <ArrowRightIcon className="h-6 w-6 duration-300 group-hover:ml-4" />
              Get Started
            </Button>
          </Link>
        </Flex>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
