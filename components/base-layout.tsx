import { Box, Center, Flex } from "@mantine/core";
import React, { ReactNode } from "react";
import { Navbar } from "./navbar";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex mih="100vh">
      {/* Left side with navbar and centered children */}
      <Flex w="50%" direction="column">
        <Navbar />
        <Center flex="1">{children}</Center>
      </Flex>

      {/* Right side with dark background */}
      <Box w="50%" bg="dark" />
    </Flex>
  );
};
