import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Group, Text } from "@mantine/core";

export const Branding = () => {
  return (
    <Link href="/" passHref style={{ textDecoration: "none" }}>
      <Group gap="xs">
        <Image src="/logo.png" width={32} height={32} alt="logo" />
        <Text fw={700} size="xl">
          PapierFluss
        </Text>
      </Group>
    </Link>
  );
};
