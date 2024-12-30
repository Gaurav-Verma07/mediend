"use client";
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Image,
  List,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import classes from "./AdsHerobox.module.css";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Herobox } from "../../../lib/utils/adsDiseaseType";
import { AdsConsultForm } from "../AboutAds/AboutAds";
import { urlFor } from "../../../lib/sanity";
import { AdsForm } from "../AdsForm/AdsForm";
export const AdsHerobox = ({ data }: { data: Herobox }) => {
  const mobile = useMediaQuery(`(min-width: 600px)`);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <BackgroundImage
      pos="relative"
      src={
        mobile
          ? "/assets/adspage/ads_hero.png"
          : "/assets/adspage/ads_mobile.png"
      }
      style={{
        backgroundPosition: "center",
        backgroundSize: mobile ? "cover" : "contain",
        backgroundRepeat: "no-repeat",
      }}
      h={600}
      mb={{ base: 250, sm: 300, md: 100, lg: 100 }}
    >
      {data?.image && (
        <Image
          pos="absolute"
          style={{ zIndex: 0 }}
          src={
            data?.image ? urlFor(data.image)?.url() : "/placeholder-image.png"
          }
          fit="contain"
          h={500}
          alt="disease"
          bottom={0}
        />
      )}{" "}
      <Container pos="relative" style={{ zIndex: 100 }} size="xl" h="inherit">
        <Flex
          justify={{ base: "center", md: "space-between" }}
          align="center"
          h="inherit "
          wrap="wrap"
        >
          <Box maw={500} my={50} ta={{ base: "center", md: "left" }}>
            <Title fz={{ base: 24, sm: 42 }}>
              {data?.title?.mainTitle}{" "}
              <Text span fz={{ base: 24, sm: 42 }} c="#2967B0" fw={600}>
                {data?.title?.cityName}
              </Text>
            </Title>
            <List
              withPadding
              fw={500}
              type="unordered"
              fz={{ base: 18, sm: 29 }}
              my={20}
              listStyleType="disc"
            >
              {data?.list.map((el: string, index) => (
                <List.Item key={index}>{el}</List.Item>
              ))}
            </List>
            <Button size="lg" onClick={open} w={330} color="#F2AC4B" c="#000">
              Get Cost Estimation
            </Button>
          </Box>
          <Box className={classes.form}>
            <AdsConsultForm />
          </Box>
        </Flex>
      </Container>
      <Modal opened={opened} onClose={close} title="Form">
        <AdsForm />
      </Modal>
    </BackgroundImage>
  );
};
