import React from "react";
import { Group } from "@mantine/core";
import { Branding } from "@components/branding";

export const Navbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Group p="md">
      <Branding />
      {children}
    </Group>
  );
};
