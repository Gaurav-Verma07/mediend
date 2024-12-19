"use client";
import Appointment from "../../components/Appointment/Appointment";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";

import {
  Card,
  Container,
  Grid,
  Group,
  Text,
  Title,
  Image,
  Flex,
  Button,
  List,
  ThemeIcon,
  rem,
  Space,
  Table,
  Stack,
  Tabs,
  ListItem,
  Accordion,
} from "@mantine/core";
import DiseaseImage from "./diseaseImage.png";
import Stories from "../../components/Stories/Stories";
import Specialities from "../../components/Specialities/Specialities";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconBriefcase,
  IconCircleCheck,
  IconHeart,
  IconHeartbeat,
  IconMessages,
  IconPoint,
  IconPointerFilled,
  IconPointFilled,
  IconRosetteDiscountCheckFilled,
  IconStethoscope,
  IconThumbUp,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import StickyTabs from "../../components/Doctors/StickyTabs/StickyTabs";
import ArticleCard from "../../components/Doctors/ArticleCard/ArticleCard";
import LoadingScreen from "../../components/Loading/loading";


export interface Treatment {
  treatmentName: string;
  treatmentLink: string;
}

export interface Review {
  name: string;
  imageUrl:string;
  review: string;
  highlight: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Doctor {
  title: string;
  slug?:string;
  imageUrl:string;
  speciality: string;
  degrees: string;
  yearsOfExperience: number;
  aboutDoctor: any[]; // Sanity block content
  treatments: Treatment[];
  reviews: Review[];
  faqs: FAQ[];
}

export default function Page() {
  const params = useParams()
const { doctorName } = params

const headerRef = useRef(null);
const [isSticky, setIsSticky] = useState(false);

 
const [pageData, setPageData] = useState<Doctor | null >(null)
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
  setIsLoading(true)
  fetch(`https://7rljkuk3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27doctor%27%26%26slug.current%3D%3D%27${doctorName}%27%5D%7B%0A++title%2C%0A++speciality%2C%0A++%22slug%22%3Aslug.current%2C%0A++degrees%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++yearsOfExperience%2C%0A++aboutDoctor%2C%0A++treatments%2C%0A++%22reviews%22%3A+reviews%5B%5D%7B%0A++++name%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++review%2C%0A++++highlight%0A++%7D%2C%0A++faqs%0A%7D%5B0%5D`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json()
  })
  .then((data) => {
    console.log('Fetched data:', data);
    setPageData(data.result);
    setIsLoading(false);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    setError(error);
    setIsLoading(false);
  });
}, [doctorName])


if (isLoading) return <LoadingScreen/>
if (error) return <div>Error loading data</div>
if (!pageData) return <div>No data found</div>



  return (
    <>

      <Group grow p={"xl"} bg={"#F8F9FA"}>
        <Grid grow gutter={"xl"} className="relative">
          <Grid.Col span={8}>

            {/* Hero */}
            <Grid grow gutter={"xl"} my={"md"}>
            <Grid.Col span={4}>
            <Image src={pageData.imageUrl} maw={250} className=" rounded-md "></Image>
            </Grid.Col>
            <Grid.Col span={8}>
            <Stack pos={"relative"}>
                <Flex gap={"sm"} align={"center"}>
                <Title c={"#1C7ED6"} className="font-semibold">{pageData.title}</Title>
                <span><IconRosetteDiscountCheckFilled color="#1C7ED6"/></span>
                </Flex>
                <div>
                    <Text c={"#5B6B7D"}>{pageData.speciality}</Text>
                    <Text c={"#5B6B7D"}>{pageData.degrees}</Text>
                </div>
                <div className="flex gap-8 p-4 bg-slate-100 rounded-md w-fit">
                <Stack gap={"xs"} >
                    <Group gap={"xs"}>
                    <IconBriefcase color="#1C7ED6"/>
                    <Title order={4} c={"#1C7ED6"}>{pageData.yearsOfExperience}+ Years</Title>
                    </Group>
                        <Text size="xs" c={"#5F6D7A"}>
                            Experience
                        </Text>
                    </Stack>
                    <hr />
                    <Stack gap={"xs"}>
                    <Group gap={"xs"}>
                    <IconThumbUp color="#1C7ED6"/>
                    <Title order={4} c={"#1C7ED6"}>99%</Title>
                    </Group>
                        <Text size="xs" c={"#5F6D7A"}>
                            Recommended
                        </Text>
                    </Stack>
                </div>
                <Group>
                  <Flex gap={"md"} wrap={"wrap"}>
                    <Button size="lg" variant="filled" >
                      Book An Appointment
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      leftSection={<IconBrandWhatsapp size={20} />}
                      rightSection={<IconArrowRight size={20} />}
                    >
                      Whatsapp Expert
                    </Button>
                  </Flex>
                </Group> 
            </Stack>
            </Grid.Col>
            </Grid>

            {/* Description */}

            <StickyTabs></StickyTabs>

            <Stack id="doctor" >
                <Card id="aboutDoctor" shadow="sm">
                <div className="prose max-w-full ">
                <PortableText value={pageData.aboutDoctor}/>
                </div>
                </Card>

                <Card id="treatment" shadow="sm" p={"md"}>
                  <Stack>
                    <Title order={2}> Treatments </Title>
                    <List
                      spacing="xs"
                      size="sm"
                      center
                      icon={
                        <IconPointFilled size={10}/>
                      }
                      >
                        {pageData.treatments.map((treatment,idx)=>{
                          return <ListItem c={"blue"} className=" underline-offset-1 underline" key={idx}><Link href={treatment.treatmentLink}><Text>{treatment.treatmentName}</Text></Link></ListItem>
                        })}
                    </List>
                    </Stack>
                </Card>
                <Card shadow="sm" id="healthFeed" padding={"lg"} >
                    <Title order={2}> Health Articles </Title>
                    <Card.Section p={"lg"}>
                    <Carousel
      withIndicators
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide><ArticleCard/></Carousel.Slide>
      <Carousel.Slide><ArticleCard/></Carousel.Slide>
      <Carousel.Slide><ArticleCard/></Carousel.Slide>
    </Carousel>
                    </Card.Section>
                </Card>
                {/* <Card shadow="sm">
                    <Title order={2}> FAQs about Dr. Anoop</Title>
                    <Accordion defaultValue="Apples">
                        {items}
                        </Accordion>
                </Card> */}
            </Stack>

            
          </Grid.Col>
          <Grid.Col span={3} pos={"relative"}>
            <Card shadow="sm" padding="lg" radius="md" withBorder pos={"sticky"} top={24}>
              <Title order={3}>Request a callback</Title>
              <Text c={"#5F6D7A"}>
                {" "}
                
                Speak to one of our representatives by filling the form below
              </Text>
              <AppointmentForm></AppointmentForm>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>

      <Stories 
  reviews={pageData.reviews} 
  title="Patient Journeys" 
  subtitle="Hear from those who have transformed their lives"
/>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FrequentlyAskedQuestions faqs={pageData.faqs}/>
        <BookConsultation />
      </div>
    </>
  );
}


