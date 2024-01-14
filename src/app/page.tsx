import { CreatePost } from "@/app/_components/create-post";
import HeroAsset from "@/assets/images/meeting.png";
import ContentCard from "@/components/dashboard/card";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import "animate.css";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="text-white">
      <Flex direction="row" className="p-24" justify="center" align="center">
        <Flex direction="column" gap="6" className="w-1/2">
          <Text className=" text-6xl font-extrabold tracking-tight">
            Customize Your Meetings
          </Text>
          <Flex direction="column" gap="2">
            <Text size="4" className="font-semibold">
              Provides instant messaging API through any device
            </Text>
          </Flex>
          <Grid columns="2" gap="6">
            <Flex gap="2" align="center">
              <CheckCircledIcon
                width={30}
                height={30}
                className="rounded-full bg-tertiary font-semibold text-black"
              />
              <Text size="4" className="font-semibold">
                30 days free trial
              </Text>
            </Flex>
            <Flex gap="2" align="center">
              <CheckCircledIcon
                width={30}
                height={30}
                className="rounded-full bg-tertiary font-semibold text-black"
              />
              <Text size="4" className="font-semibold">
                100% secure network
              </Text>
            </Flex>
            <Flex gap="2" align="center">
              <CheckCircledIcon
                width={30}
                height={30}
                className="rounded-full bg-tertiary font-semibold text-black"
              />
              <Text size="4" className="font-semibold">
                Quick and easy testing
              </Text>
            </Flex>
            <Flex gap="2" align="center">
              <CheckCircledIcon
                width={30}
                height={30}
                className="rounded-full bg-tertiary font-semibold text-black"
              />
              <Text size="4" className="font-semibold">
                Technical support
              </Text>
            </Flex>
          </Grid>
          <Flex gap="2" align="center">
            <input
              type="text"
              placeholder="Your work email"
              className=" h-14  w-full rounded-full  px-4 text-black outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            />

            <Button
              className="relative -left-[165px] "
              style={{
                padding: "20px 30px",
              }}
              size="4"
            >
              Get Started
            </Button>
          </Flex>
        </Flex>

        <Image
          className="animate__animated animate__fadeInRight "
          src={HeroAsset}
          alt="hero"
          width={500}
          height={500}
        />
      </Flex>
      <Flex className="bg-white px-24 py-10" gap="4" justify="between">
        <ContentCard tag="blog" title="Why Vidplus growing rapidly in USA">
          <Image
            src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg?size=626&ext=jpg&ga=GA1.1.1239275496.1705147517&semt=sph"
            alt="hero"
            width={150}
            height={100}
          />
        </ContentCard>
        <ContentCard
          tag="testimonials"
          title="I am just loving the UI of Vidplus"
        >
          <video className="rounded-xl" width="200" height="200" controls>
            <source
              src="https://harmony.videvo.net/videvo_files/video/partners0222/small_watermarked/Untitled00837788_FPpreview.mp4"
              type="video/mp4"
            />
          </video>
        </ContentCard>
        <ContentCard tag="stories" title="My growth increase with vidplus">
          <Image
            className="rounded-full"
            src="https://img.freepik.com/free-vector/mobile-marketing-concept-illustration_114360-1497.jpg?size=626&ext=jpg&ga=GA1.1.1239275496.1705147517&semt=sph"
            alt="hero"
            width={150}
            height={100}
          />
        </ContentCard>
      </Flex>
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
