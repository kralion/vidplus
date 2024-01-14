import { Button, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function ContentCard({
  children,
  title,
  tag,
}: {
  children: React.ReactNode;
  title: string;
  tag: string;
}) {
  return (
    <Flex className="p-4 text-black" align="start" direction="row" gap="4">
      {children}
      <Flex direction="column" align="start" gap="3">
        <Text className="text-md font-semibold uppercase text-slate-500">
          #{tag}
        </Text>
        <Text className="font-semibold">{title}</Text>
        <Button variant="ghost" className="font-semibold" color="orange">
          Learn More <ChevronRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
}
