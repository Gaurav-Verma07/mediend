"use client"
import React, { useMemo } from 'react';
import Image from 'next/image';
import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Input,
  Modal
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import Appointment from "../Appointment/Appointment";
import classes from "./Header.module.css";
import { tabs } from "./headerData";
import HoverCards from "./HoverCards";
import { LinksGroup } from "./NavbarLinksGroup";

const MemoizedHoverCards = React.memo(HoverCards);
const MemoizedLinksGroup = React.memo(LinksGroup);

const Header = () => {
  const [modalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  // Memoize tabs rendering to prevent unnecessary re-renders
  const memoizedTabs = useMemo(() => (
    <>
      {tabs.map((el, index) => (
        <MemoizedHoverCards key={index} data={el} />
      ))}
    </>
  ), [tabs]);

  const memoizedDrawerLinks = useMemo(() => (
    <>
      {tabs.map((el, index) => (
        <MemoizedLinksGroup {...el} key={index} />
      ))}
    </>
  ), [tabs]);

  return (
    <>
      <div className={classes.header}>
        <Container className={classes.mainSection} size="xl">
          <Group justify="space-between">
            <Image 
              src="/logo.png" 
              alt="logo" 
              width={80} 
              height={80} 
              priority 
            />
            <Group>
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
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="lg"
              size="sm"
            />
          </Group>
        </Container>
        <Container size="xl" className={classes.subHeader} mb={5}>
          <Box>
            {memoizedTabs}
          </Box>
        </Container>
        <Drawer opened={opened} onClose={close}>
          {memoizedDrawerLinks}
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