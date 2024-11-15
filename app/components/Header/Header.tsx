"use client";
import cx from "clsx";
import { useState } from "react";
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  useMantineTheme,
  Image,
  Button,
  Input,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
  IconSearch,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import { tabs } from "./headerData";
import HoverCards from "./HoverCards";

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

const Header = () => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="xl">
        <Group justify="space-between">
          <Image src={"/logo.png"} alt="logo" />

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Input
            radius="xl"
            leftSection={<IconSearch />}
            placeholder="Search ..."
          />
          <Button radius="xl" bg="#4A3AFF">
            Schedule Call
          </Button>
        </Group>
      </Container>
      <Container size="xl" className={classes.subHeader} mb={5}>
        <Box>
          {tabs.map((el: any, index: number) => (
            <HoverCards key={index} data={el} />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Header;
