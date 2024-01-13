import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Flex, Text, Button, Box, Grid } from "@radix-ui/themes";
import { DialogRadix } from "./_components/dialog";
import { PaginationFloatUI } from "./_components/pagination";
import HeroAsset from "@/assets/images/meeting.png";
import Image from "next/image";
export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex  items-center justify-center gap-2 text-white">
      <div className="w-1/2">
        <Text className="text-3xl font-extrabold tracking-tight sm:text-[5rem]">
          Customize Meetings <br />
          <span className="text-[hsl(280,100%,70%)]">Your Way</span>
        </Text>
        <Text className="text-3xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Vid</span> Plus
        </Text>
        <Text className="text-3xl font-extrabold tracking-tight sm:text-[5rem]"></Text>
        <Link href="/about">
          <Button variant="solid">About</Button>
        </Link>
      </div>
      <Image src={HeroAsset} alt="hero" width={500} height={500} />
      {/* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <DialogRadix />
        <Grid columns="3" gap="3">
          <Flex direction="column" gap="3">
            <Box height="5">
              <div className="h-10 w-10 bg-purple-100" />
            </Box>
            <Box height="7">
              <div className="h-10 w-10 bg-purple-100" />
            </Box>
            <Box height="9">
              <div className="h-10 w-10 bg-purple-100" />
            </Box>
          </Flex>

          <Flex direction="column" gap="3">
            <Box grow="1">
              <div className="h-10 w-10 bg-purple-100" />
            </Box>
            <Box height="6">
              <div className="h-10 w-10 bg-purple-100" />
            </Box>
          </Flex>
        </Grid>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Vid <span className="text-[hsl(280,100%,70%)]">Plus</span>
        </h1>
        <Flex direction="column" gap="2"></Flex>

        <CrudShowcase />
        <PaginationFloatUI />
      </div> */}
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
