"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { AboutAds, StickyForm } from "../../components/AboutAds/AboutAds";
import { AdsHerobox } from "../../components/AdsHerobox/AdsHerobox";
import { AdsInfoBox } from "../../components/AdsInfoBox/AdsInfoBox";
import { IconArrowNarrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";
import { faqs } from "../../components/FAQs/faqs";
import { Procedure } from "../../components/Procedure/Procedure";
import { ExpertDoctors } from "../../components/ExpertDoctors/ExpertDoctors";
import { useMediaQuery } from "@mantine/hooks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { sanity, urlFor } from "../../../lib/sanity";
import { AdsDisease, BenefitsType } from "../../../lib/utils/adsDiseaseType";
import Link from "next/link";

const benefits = (benefit1: string, benefit2: string, benefit3: string) => [
  {
    info: benefit1,
    bg: "#F2AC4B",
  },
  {
    info: benefit2,
    bg: "#3269DB",
  },
  {
    info: benefit3,
    bg: "#3CBA92",
  },
];

const Benefits = ({ data }: { data: BenefitsType }) => {
  const mobile = useMediaQuery(`(min-width: 600px)`);
  const benefitData = benefits(data?.benefit1, data?.benefit2, data?.benefit3);
  return (
    <Box maw={823} my={50}>
      <Title fz={{ base: 25, sm: 34 }}>{data?.heading}</Title>
      <Flex
        gap={10}
        pos="relative"
        direction={{ base: "column", sm: "row" }}
        align="center"
        justify={{ base: "center", sm: "space-between" }}
        my={40}
      >
        {benefitData?.map(
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
  const params = useParams();
  const { disName } = params;
  const [isLoading, setIsLoading] = useState(false);
  const mobile = useMediaQuery(`(min-width: 600px)`);
  const [data, setData] = useState<AdsDisease>({} as AdsDisease);
  useEffect(() => {
    const fetchDisease = async () => {
      try {
        setIsLoading(true);
        const response = await sanity.fetch(`*[_type == "ads"]`);
        const diseaseData = response.filter(
          (el: AdsDisease) =>
            el.diseaseName.toLowerCase().trim() ===
            (disName as string).toLowerCase().trim()
        );
        setData(diseaseData[0]);
      } catch (error: any) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDisease();
  }, []);
  console.log(data);

  return (
    <>
      <Box bg="#0B77A1">
        <Container
          size="xl"
          style={{ display: "flex", justifyContent: "space-between" }}
          py={10}
        >
          <Image
            src="/logo.png"
            h={{ base: 50, sm: 70 }}
            fit="contain"
            alt="logo"
          />
          <Group>
            {data?.header?.isCallLink && (
              <Button
                component={Link}
                href={data?.header?.callLink || ""}
                size={mobile ? "lg" : "xs"}
                variant="outline"
                color="#fff"
              >
                Schedule Call
              </Button>
            )}
            {data?.header?.isWhatsapp && (
              <Button
                component={Link}
                href={data?.header?.whatsappLink || ""}
                size={mobile ? "lg" : "xs"}
                leftSection={<IconBrandWhatsapp color="#34A853" />}
                rightSection={<IconArrowNarrowRight color="#34A853" />}
                c="#34A853"
                color="#fff"
              >
                WhatsApp Expert
              </Button>
            )}
          </Group>
        </Container>
      </Box>
      <AdsHerobox data={data?.herobox} />
      <Container
        size="xl"
        pos="relative"
        display={{ base: "block", lg: "flex" }}
        style={{ justifyContent: "space-between" }}
      >
        <Box>
          <AboutAds data={data?.about} />
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
                component={Link}
                href={data?.consultLink || ""}
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
          <ExpertDoctors data={data?.doctors} />
          <AdsInfoBox
            type="disease"
            pt={0}
            title={
              <Title ta={{ base: "center", sm: "left" }} c="#3269DB">
                {data?.disease?.diseaseQue}
              </Title>
            }
            img={
              data?.disease?.diseaseImage
                ? urlFor(data?.disease?.diseaseImage)?.url()
                : "/placeholder-image.png"
            }
            info={data?.disease?.diseaseans}
            bg="#E9F1FF"
            pb={40}
          />
          <Procedure data={data?.procedure} />
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
                component={Link}
                href={data?.insuranceLink || ""}
                w={{ base: "fit-content", sm: 300 }}
                size={mobile ? "md" : "xs"}
                fz={mobile ? 16 : 8}
                color="#4285F4"
              >
                Verify Your Insurance
              </Button>
            }
          />
          <Benefits data={data?.benefits} />

          <FrequentlyAskedQuestions faqs={data?.faqs} />
        </Box>
        <StickyForm />
      </Container>
      <Box bg="#0B77A1" py={30}>
        <Text fz={{ base: 20, sm: 32 }} ta="center" c="#fff">
          Need Help ?
        </Text>
        <Group my={20} justify="center">
          <Button
            component={Link}
            href={data?.footer?.expertsLink || ""}
            size="md"
            color="#FBBC05"
            c="#000"
            rightSection={<IconArrowNarrowRight />}
          >
            Call our Experts for Free
          </Button>
          <Button
            component={Link}
            href={data?.footer?.whatsappLink || ""}
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
