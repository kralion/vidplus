import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";

export default async function AvatarUser() {
  const session = await getServerSession(authOptions);

  return (
    <Button variant="soft">
      {session?.user.name}
      <ChevronDownIcon />
    </Button>
  );
}
