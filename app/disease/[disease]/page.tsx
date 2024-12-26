"use client";


import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import Appointment from "../../components/Appointment/Appointment";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";
import { faqs } from "../../components/FAQs/faqs";
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
  IconStethoscope,
  IconThumbUp,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Footer from "../../components/Footer/Footer";
import LoadingScreen from "../../components/Loading/loading";
import WhyUs from "../../components/WhyUs/WhyUs";
import { Doctor } from '../../doctor/[doctorName]/page';
import Link from 'next/link';
import useEmblaCarousel, { EmblaPluginType } from 'embla-carousel-react';
import DoctorCarousel from '../../components/Doctors/DoctorCarousel/DoctorCarousel';

const elements = [
  { property: "Incision Size", traditional: "5-7cm", minimallyInvasive: "1-2cm"},
  { property: "Incision Size", traditional: "5-7cm", minimallyInvasive: "1-2cm"},
  { property: "Incision Size", traditional: "5-7cm", minimallyInvasive: "1-2cm"},
  { property: "Incision Size", traditional: "5-7cm", minimallyInvasive: "1-2cm"},

];

const storiesData = [
  {
    imageUrl: "/assets/stories/stories_1.png",
    highlight: "“Strength to embrace my son and life again”",
    review: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    imageUrl: "/assets/stories/stories_2.png",
    highlight: "“We feel like we can finally live a normal life!”",
    review: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
  {
    imageUrl: "/assets/stories/stories_1.png",
    highlight: "“Strength to embrace my son and life again”",
    review: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    imageUrl: "/assets/stories/stories_2.png",
    highlight: "“We feel like we can finally live a normal life!”",
    review: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
];

interface LipomaSanityDocument {
  title: string;
  header: string;
  imageUrl:string,
  shortDescription: string;
  featuredTreatments: string[];
  content: ContentBlock[];
  infoCards: InfoCard[];
  doctors: Doctor[];
  additionalContent1?: ContentBlock[];
  
  additionalContent2?: ContentBlock[];

  reviews?: Review[];
  faqs?: FAQ[];

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

interface ContentBlock {
  _type: string;
  style: string;
  _key: string;
  markDefs?: any[];
  children: ContentChild[];
  level?: number;
  listItem?: string;
}

interface ContentChild {
  _type: string;
  marks: string[];
  text: string;
  _key: string;
}

interface InfoCard {
  _type: string;
  infoCardTitle: string;
  infoCardBody: string[];
  _key: string;
}

export default function Page() {
  const params = useParams()
const { disease } = params
const cardBackgrounds = ["#D7E4F2", "#FFEBD9"];

 
const [pageData, setPageData] = useState<LipomaSanityDocument>()
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  setIsLoading(true)
  fetch(`https://7rljkuk3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27disease%27+%26%26+slug.current+%3D%3D+%22${disease}%22%5D%7B%0A++title%2C%0A++header%2C%0A++shortDescription%2C%0A++%22slug%22%3Aslug.current%2C%0A++%22imageUrl%22%3A+headerImage.asset-%3Eurl%2C%0A++doctors%5B%5D-%3E%7B%0A++++title%2C%0A++++%22imageUrl%22%3Aimage.asset-%3Eurl%2C%0A++++degrees%2C%0A++++speciality%2C%0A++++yearsOfExperience%2C%0A++++%22slug%22%3Aslug.current%0A++++%0A++%7D%2C%0A++featuredTreatments%2C%0A++content%2C%0A++infoCards%2C%0A++reviews%2C%0A++faqs%2C%0A++additionalContent1%2C%0A++additionalContent2%0A%7D%5B0%5D%0A`, {
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
}, [disease])


if (isLoading) return <LoadingScreen/>
if (error) return <div>Error loading data</div>
if (!pageData) return <div>No data found</div>


  const rows = elements.map((element) => (
    <Table.Tr key={element.property} style={{background:"#EEF0F5", margin:"2px"}}>
      <Table.Td>{element.property}</Table.Td>
      <Table.Td><div style={{paddingInline:"1.5rem", padding:"0.5rem", background:"white", borderRadius:"100px", textAlign:"center"}}>{element.traditional.toLocaleUpperCase()}</div></Table.Td>
      <Table.Td><div style={{paddingInline:"1.5rem", padding:"0.5rem", background:"#3269DB", borderRadius:"100px", color:"white",textAlign:"center"}}>{element.minimallyInvasive.toLocaleUpperCase()}</div></Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Group grow p={"xl"} bg={"#F8F9FA"}>
        <Grid gutter={"xl"} className="relative" >
          <Grid.Col span={{base:12,md:8,lg:8}}>
            <Grid grow gutter={"sm"}>
              <Grid.Col span={6}>
                <Group my={"lg"}>
                  <Title>
                    {" "}
                    {pageData.header}
                  </Title>
                  <Text>
                    {" "}
                    {pageData.shortDescription}
                  </Text>
                </Group>
                <Group my={"md"} grow>
                  <Grid gutter={"md"}>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"start"} align={"center"}>
                          <IconHeartbeat
                            style={{ color: "#FF990C",marginRight:"8px" }}
                          ></IconHeartbeat>
                          <Title order={4}>100%</Title>
                        </Flex>
                        <Text size="xs">Latest Procedures</Text>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"start"} align={"center"}>
                          <IconStethoscope
                            style={{ color: "#FF990C",marginRight:"8px" }}
                          ></IconStethoscope>
                          <Title order={4}>50+</Title>
                        </Flex>
                        <Text size="xs">Expert Surgeons</Text>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"start"} align={"center"}>
                          <IconMessages
                            style={{ color: "#FF990C",marginRight:"8px" }}
                          ></IconMessages>
                          <Title order={4}>1:1</Title>
                        </Flex>
                        <Text size="xs">Personal Support</Text>
                      </Card>
                    </Grid.Col>
                  </Grid>
                </Group>
                <Group my={"xl"}>
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
                
              </Grid.Col>

              <Grid.Col span={{ base: 0, md: 2, lg: 2 }}>
                <Image src={pageData.imageUrl} maw={250}></Image>
              </Grid.Col>

              <Grid.Col span={8} className="hidden sm:flex ">
              <Group >
                  <Card w={"100%"}>
                        <Image src={"https://s3-alpha-sig.figma.com/img/1ccd/0a20/2477415d64f1e10258a27b64a05499cc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7vTDrmeMQWNZvKB07vWlMySKpX4CmeNHEkAa0SM6uqPLzeaKqCHHUJ4wqPCoNPO45OLnIYmVikXyIawoTUBqV0gNtIDtVQho3lv3oXVDWF2-16iDn1ATneAjTmcW6EH8oEqo-tyznL4Lt8gdomkUtHNPJIC~169BuOlrv588SXHmMUy0AhsBWWA6YkDJ2qql~OLJ7WSFornpViJk2qgPG4nYk0LVLkZSUj4PSDExWGaRZgAF-rpiOi8sxVsguylPvGGqxmoH~6P4REba3JUNTfyZVA7baDvpYRelMaN5OmiUmGCjcG6vj2hvnLqwlen~UGiMT6KQuO4mR~tWqCJ6A__"} className=" scale-125"></Image>
                  </Card>
                </Group>
              </Grid.Col>

          {     pageData.infoCards &&
                            <Card radius={"lg"} shadow="lg" my={"lg"}>

                            <Grid.Col span={6} mt={"lg"}>
                              {/* <hr style={{ margin: "2rem 0" }} /> */}
                              <Grid>
                              {pageData.infoCards.map((card, index) => (
                      <Grid.Col key={card._key} span={{base:12, md:6}}>
                        <Card 
                          style={{ 
                            background: cardBackgrounds[index % cardBackgrounds.length] 
                          }} 
                          padding="sm"
                        >
                          <Title order={4}>{card.infoCardTitle}</Title>
                          <Card.Section p="md">
                            <List
                              spacing="xs"
                              size="sm"
                              center
                              icon={
                                <ThemeIcon color="#FF990C" size={24} radius="xl">
                                  <IconCircleCheck
                                    style={{ width: rem(16), height: rem(16) }}
                                  />
                                </ThemeIcon>
                              }
                            >
                              {card.infoCardBody.map((item, itemIndex) => (
                                <List.Item key={itemIndex}>{item}</List.Item>
                              ))}
                            </List>
                          </Card.Section>
                        </Card>
                      </Grid.Col>
                    ))}
                  </Grid>
                              <hr style={{ margin: "2rem 0", color: "grey" }} />
                            </Grid.Col>
              
                            </Card>
          }


            { pageData.featuredTreatments &&
                              <Grid.Col span={8} mt={"lg"}>
                              <Stack gap={"lg"}>
                              <Title order={2}>Featured Treatments</Title>
                              <Flex wrap={"wrap"} gap={"md"}>
                                {
                                  pageData.featuredTreatments.map((treatment,idx) => {
                                    return(
                                    <Card style={{background: cardBackgrounds[idx % cardBackgrounds.length] }} padding={"lg"} key={idx}>
                                  <Text size="md">{treatment}</Text>
                                </Card>
                                    )
                                  })
                                }
                                
                              </Flex>
                              </Stack>
                            </Grid.Col>
            }


              <Card radius={"lg"} shadow="lg" my={"lg"} w={"100%"}> 
              <Grid.Col span={8} mt={"lg"}>
                <Stack  gap={"lg"}>
                <Title order={2}>Why opt for Minimally Invasive Lipoma Procedure?</Title>
                <Table withRowBorders={false} verticalSpacing={"md"} horizontalSpacing={"md"} striped highlightOnHover >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th></Table.Th>
                      <Table.Th style={{textAlign:"center"}}>Traditional</Table.Th>
                      <Table.Th style={{textAlign:"center"}}>Minimally Invasive</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                </Table>
                </Stack>
              </Grid.Col>
              </Card>
              <Grid.Col span={8} mt={"lg"}>
                <Stack gap={"lg"}>
                <Title order={2}>Our Expert Doctors</Title>
                  <DoctorCarousel data={pageData.doctors}></DoctorCarousel>
                </Stack>
              </Grid.Col>
              <Grid.Col span={8} mt={"lg"}>
              <Card radius={"lg"} shadow="lg">
                <div className="prose max-w-full ">
                <PortableText value={pageData.content}/>
                </div>
                </Card>
                {
                  pageData.additionalContent1 && 
                  <Card shadow="sm" mt={"md"} radius={"lg"}>
                  <div className="prose max-w-full ">
                <PortableText value={pageData.additionalContent1}/>
                </div>
                </Card>
                }
                {
                  pageData.additionalContent2 && 
                  <Card shadow="sm" mt={"md"} radius={"lg"}>

                  <div className="prose max-w-full ">
                <PortableText value={pageData.additionalContent2}/>
                </div>
                </Card>
                }
              </Grid.Col>

            </Grid>
          </Grid.Col>
          <Grid.Col span={{base:12,md:4,lg:4}} pos={"relative"}>
            <Card shadow="sm" padding="lg" radius="md" withBorder pos={"sticky"} top={24}>
              <Title order={3}>Request a callback</Title>
              <Text c={"#5F6D7A"}>
                {" "}
                
                Speak to one of our representatives by filling the form below
              </Text>
              <AppointmentForm pageName={disease}></AppointmentForm>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>

      <WhyUs></WhyUs>
                  { pageData.reviews &&

      <Stories reviews={pageData.reviews} />
                  }
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {
          pageData.faqs &&
        <FrequentlyAskedQuestions faqs={pageData.faqs} />
        }
        <BookConsultation />
      </div>
    </>
  );
}
