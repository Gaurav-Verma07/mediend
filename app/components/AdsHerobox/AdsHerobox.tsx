"use client";
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  List,
  Text,
  Title,
} from "@mantine/core";
import { ConsultForm } from "../ConsultForm/ConsultForm";
import classes from "./AdsHerobox.module.css";
import { useMediaQuery } from "@mantine/hooks";
export const AdsHerobox = () => {
  const mobile = useMediaQuery(`(min-width: 600px)`);

  return (
    <BackgroundImage
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
      <Container size="xl" h="inherit">
        <Flex
          justify={{ base: "center", md: "space-between" }}
          align="center"
          h="inherit "
          wrap="wrap"
        >
          <Box maw={500} my={50} ta={{ base: "center", md: "left" }}>
            <Title fz={{ base: 24, sm: 42 }}>
              Best Surgery for Lipoma in{" "}
              <Text span fz={{ base: 24, sm: 42 }} c="#2967B0" fw={600}>
                Delhi-NCR
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
              <List.Item>50% Off on Treatment</List.Item>
              <List.Item>Quick 30-Minute Procedure</List.Item>
              <List.Item>Insurance Accepted</List.Item>
            </List>
            <Button size="lg" w={330} color="#F2AC4B" c="#000">
              Get Cost Estimation
            </Button>
          </Box>
          <Box className={classes.form}>
            <ConsultForm />
          </Box>
        </Flex>
      </Container>
    </BackgroundImage>
  );
};
