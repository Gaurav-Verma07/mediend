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
  Drawer,
  Modal,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { tabs } from "./headerData";
import HoverCards from "./HoverCards";
import {
  LinksGroup,
  LinksGroupProps,
  NavbarLinksGroup,
} from "./NavbarLinksGroup";
import Appointment from "../Appointment/Appointment";
import classes from "./Header.module.css";

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

const Header = () => {
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);
  const [opened, { toggle, close }] = useDisclosure(false);
  const mobile = useMediaQuery(`(min-width: 1200px)`);

  return (
    <>
      <div className={classes.header}>
        <Container className={classes.mainSection} size="xl">
          <Group justify="space-between">
            <Image src={"/logo.png"} alt="logo" height={80} />

            {mobile && (
              <Box style={{ display: "flex" }}>
                <Input
                  radius="md"
                  w={250}
                  classNames={{ input: classes.input }}
                  leftSection={<IconSearch />}
                  placeholder="Search ..."
                  mr={30}
                />
                <Button onClick={modalOpen} radius="xl" bg="#4A3AFF">
                  Schedule Call
                </Button>
              </Box>
            )}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="lg"
              size="sm"
            />
          </Group>
        </Container>
        {mobile && (
          <Container size="xl" className={classes.subHeader} mb={5}>
            <Box>
              {tabs.map((el: any, index: number) => (
                <HoverCards key={index} data={el} />
              ))}
            </Box>
          </Container>
        )}
        <Drawer opened={opened} onClose={close}>
          {tabs.map((el, index: number) => (
            <LinksGroup {...el} key={index} />
          ))}
        </Drawer>
      </div>
      <Modal
        opened={modalOpened}
        onClose={modalClose}
        radius="lg"
        classNames={{
          content: classes.modal__content,
          header: classes.modal__header,
          title: classes.modal__title,
          close: classes.modal__close,
        }}
        title="Book Your FREE Consultation Now"
      >
        <Appointment />
      </Modal>
    </>
  );
};

export default Header;
