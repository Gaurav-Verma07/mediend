"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { AboutAds } from "../components/AboutAds/AboutAds";
import { AdsHerobox } from "../components/AdsHerobox/AdsHerobox";
import { AdsInfoBox } from "../components/AdsInfoBox/AdsInfoBox";
import { IconArrowNarrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import FrequentlyAskedQuestions from "../components/FAQs/FrequentlyAskedQuestions";
import { faqs } from "../components/FAQs/faqs";
import { translate } from "googleapis/build/src/apis/translate";
import { Procedure } from "../components/Procedure/Procedure";
import { ExpertDoctors } from "../components/ExpertDoctors/ExpertDoctors";
import { useMediaQuery } from "@mantine/hooks";

const benefits = [
  {
    info: "Aesthetic and Functional Improvement",
    bg: "#F2AC4B",
  },
  {
    info: "Pain-Free and Scar-Free Experience",
    bg: "#3269DB",
  },
  {
    info: "Long-Term Benefits and Quick Recovery",
    bg: "#3CBA92",
  },
];

const Benefits = () => {
  const mobile = useMediaQuery(`(min-width: 600px)`);

  return (
    <Box maw={823} my={50}>
      <Title fz={{ base: 25, sm: 34 }}>Benefits of Lipoma Surgery</Title>
      <Flex
        gap={10}
        pos="relative"
        direction={{ base: "column", sm: "row" }}
        align="center"
        justify={{ base: "center", sm: "space-between" }}
        my={40}
      >
        {benefits.map(
          ({ info, bg }: { info: string; bg: string }, index: number) => (
            <Flex
              justify="center"
              align="center"
              p={20}
              w={240}
              h={240}
              style={{ borderRadius: "50%" }}
              key={index}
              bg={bg}
            >
              <Text ta="center" c="white" fz={{ base: 20, sm: 26 }} fw="500">
                {info}
              </Text>
            </Flex>
          )
        )}
        <Divider
          orientation={mobile ? "horizontal" : "vertical"}
          h={{ base: "90%", sm: "2px" }}
          pos="absolute"
          w={{ base: "2px", sm: "90%" }}
          left="50%"
          color="#000"
          variant="dashed"
          size="md"
          top="50%"
          style={{ transform: "translate(-50%, -50%)", zIndex: -1 }}
        />
      </Flex>
    </Box>
  );
};

export default function AboutUsPage() {
  const mobile = useMediaQuery(`(min-width: 600px)`);

  return (
    <>
      <AdsHerobox />
      <Container size="xl">
        <AboutAds />
        <AdsInfoBox
          img="/assets/adspage/doctors.png"
          title={
            <Title fz={{ base: 15, sm: 36 }}>
              Book Your{" "}
              <Text span fz="inherit" fw="inherit" c="#34A853">
                {" "}
                FREE
              </Text>{" "}
              Consultation Today
            </Title>
          }
          info="Connect with our expert doctors to discuss the best treatment options tailored for you."
          button={
            <Button
              w={{ base: "fit-content", sm: 300 }}
              size={mobile ? "md" : "xs"}
              fz={mobile ? 16 : 8}
              color="#34A853"
              leftSection={<IconBrandWhatsapp size={mobile ? 25 : 17} />}
            >
              Whatsapp To Consult Now
            </Button>
          }
          bg="#FEF7EF"
        />
        <ExpertDoctors />
        <AdsInfoBox
          type="lipoma"
          pt={0}
          title={
            <Title ta={{ base: "center", sm: "left" }} c="#3269DB">
              What is a Lipoma?
            </Title>
          }
          img="/assets/adspage/lipoma.png"
          info="Lipomas are harmless conditions that do not require treatment except in certain situations when they cause severe pain and are unattractive in appearance. Read on to learn more about these fatty lumps."
          bg="#E9F1FF"
          pb={40}
        />
        <Procedure />
        <AdsInfoBox
          title={
            <Title fz={{ base: 15, sm: 34 }}>
              Verify Your{" "}
              <Text span fz="inherit" fw="inherit" c="#023E8A">
                {" "}
                Insurance Coverage
              </Text>
            </Title>
          }
          img="/assets/adspage/insurance.png"
          info="Connect with our expert doctors to discuss the best treatment options tailored for you."
          bg="#EEF3FF"
          button={
            <Button
              w={{ base: "fit-content", sm: 300 }}
              size={mobile ? "md" : "xs"}
              fz={mobile ? 16 : 8}
              color="#4285F4"
            >
              Verify Your Insurance
            </Button>
          }
        />
        <Benefits />

        <FrequentlyAskedQuestions faqs={faqs} />
      </Container>
      <Box bg="#0B77A1" py={30}>
        <Text fz={{ base: 20, sm: 32 }} ta="center" c="#fff">
          Need Help ?
        </Text>
        <Group my={20} justify="center">
          <Button
            size="md"
            color="#FBBC05"
            c="#000"
            rightSection={<IconArrowNarrowRight />}
          >
            Call our Experts for Free
          </Button>
          <Button
            size="md"
            leftSection={<IconBrandWhatsapp color="#34A853" />}
            rightSection={<IconArrowNarrowRight color="#34A853" />}
            c="#34A853"
            color="#fff"
          >
            WhatsApp Expert
          </Button>
        </Group>
      </Box>
    </>
  );
}
