import { Box, Container, Divider, Flex, Image, Title } from "@mantine/core";
import OurFounder from "../components/OurFounder/OurFounder";
import OurValues from "../components/OurValues/OurValues";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutHerobox from "../components/AboutHerobox/AboutHerobox";

export default function AboutUsPage() {
  return (
    <>
      <AboutHerobox />
      <Container size="xl">
        <OurFounder />
        <OurValues />
        <OurTeam />
        <Flex
          justify={{ base: "center", lg: "space-between" }}
          wrap="wrap"
          align="center"
          my={80}
        >
          <Box my={30} ta="center">
            <Title fz={{ base: 24, sm: 42 }}>We’re here for you</Title>
            <Title c="#2967B0" fz={{ base: 24, sm: 42 }}>
              no matter where you are
            </Title>
            <Divider my={20} size="md" />
          </Box>
          <Image src="/assets/map.png" alt="map" />
        </Flex>
      </Container>
    </>
  );
}
