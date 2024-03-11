import {
  DashboardIcon,
  TimerIcon,
  PersonIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
const navLinks = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    href: "/vidplus/dashboard",
  },
  {
    name: "History",
    icon: TimerIcon,
    href: "/vidplus/history",
  },
  {
    name: "Profile",
    icon: PersonIcon,
    href: "/vidplus/profile",
  },
  {
    name: "My Videos",
    icon: VideoIcon,
    href: "/vidplus/my-videos",
  },
];

export default function NavBar() {
  return (
    <Box
      mx="auto"
      p="6"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
        backdropFilter: "var(--backdrop-blur-2)",
        boxShadow: "var(--shadow-2)",
      }}
    >
      <Flex gap="2" align="center">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <Button variant="soft">
              <link.icon />
              <span>{link.name}</span>
            </Button>
          </Link>
        ))}
      </Flex>
    </Box>
  );
}
