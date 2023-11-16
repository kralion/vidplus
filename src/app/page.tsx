import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Flex, Text, Button, Box, Grid } from "@radix-ui/themes";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6d025b] to-[#2c1525] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
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
        <Flex direction="column" gap="2">
          <Button className="cursor-pointer">Let&apos;s go</Button>
        </Flex>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>

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
