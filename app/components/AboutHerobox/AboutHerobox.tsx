"use client";
import {
  BackgroundImage,
  Badge,
  Box,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const AboutHerobox = () => {
  const mobile = useMediaQuery(`(min-width: 1000px)`);

  return (
    <BackgroundImage
      mb={50}
      mih={500}
      src={mobile ? "/assets/about__hero.png" : "/assets/about_hero_mobile.png"}
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box ta="center">
        <Badge variant="white" color="#2967B0" size="xl">
          About Us!
        </Badge>
        <Title my={30} fz={{ base: 30, sm: 64 }} c="#2967B0">
          Providing Quality Care
        </Title>
        <Text maw={500} mx="auto" c="#2967B0" fz={{ base: 16, sm: 18 }}>
          where we provide personalized and comprehensive healthcare services to
          help you live your best life
        </Text>
      </Box>
    </BackgroundImage>
  );
};

export default AboutHerobox;
