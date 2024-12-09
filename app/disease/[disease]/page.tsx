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

const elements = [
  { property: "Incision Size", traditional: "5-7cm", minimallyInvasive: "1-2cm"},
  { property: "Incision Size", traditional: "5-7cm", minimallyInvasive: "1-2cm"},
  { property: "Incision Size", traditional: "5-7cm", minimallyInvasive: "1-2cm"},
  { property: "Incision Size", traditional: "5-7cm", minimallyInvasive: "1-2cm"},

];

interface LipomaSanityDocument {
  title: string;
  header: string;
  shortDescription: string;
  featuredTreatments: string[];
  content: ContentBlock[];
  infoCards: InfoCard[];
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
const cardBackgrounds = ["#F4F7FB", "#FFF8F0"];

 
const [pageData, setPageData] = useState<LipomaSanityDocument>()
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  setIsLoading(true)
  fetch('https://7rljkuk3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22disease%22%5D%7B%0A++title%2C%0A++header%2C%0A++shortDescription%2C%0A++featuredTreatments%2C%0A++content%2C%0A++infoCards%0A++%0A%7D%5B0%5D', {
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


if (isLoading) return <div>Loading...</div>
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
      <Group grow p={"xl"}>
        <Grid grow gutter={"xl"} className="relative">
          <Grid.Col span={8}>
            <Grid grow gutter={"md"}>
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
                <Image src="https://s3-alpha-sig.figma.com/img/3ff9/0c22/b2c6f1aa504feb35c4921e907fa641a6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2oK34~PtySBv5thxhy1ISXx3TAR-iq-vrdh~wpzpBwc0TCKiMAm9DW3IEMwzv3UR4wZlb-mZn5Nm3jvUyi6D0N4kQ98ATaQh4s4hSKwJcaGNQyh1tPTwLXwdozyQ0qLQE1AH26wm~MW2AdnhHob7y8B4UU5~bj2jCLDR2yLMf-z~JUITJnvSaXiDtOr6nV5R2ahl-J-wY25r75xsCucemIk2HRRYyMloorx43-W0VH0ClKzW6VLqeFobIwMeZAa97wz5bfOxU7MqbgMlmmaGdSFLUhfvhr~da0isfHJ52TRCGNiE9D3D9MR7F5MdGOCdHi-fvXMTtE-1ydi7mq-Hw__"></Image>
              </Grid.Col>

              <Grid.Col span={6} mt={"lg"}>
                <hr style={{ margin: "2rem 0" }} />
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
              <Grid.Col span={8} mt={"lg"}>
                <Stack gap={"lg"}>
                <Title order={2}>Our Expert Doctors</Title>
                <Carousel slideSize="60%" slideGap="md" loop p={"md"}>
                  
                  <Carousel.Slide>
                    <Card shadow="lg">
                      <Group gap={"md"}>
                      <Image src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png" radius={"lg"} w={150}></Image>
                      <Stack gap={"lg"} justify="space-between">
                      <div>
                      <Title order={4} c={"#3269DB"}>Dr. Deepak Kumar Sinha</Title>
                      <Text size="xs" c={"#5F6D7A"}>General</Text>
                      <Text size="xs" c={"#5F6D7A"}>Surgery, Proctology, Laproscopic Surg...</Text>
                      </div>
                      <Group>
                        <div>
                        <Group gap={"sm"}><IconBriefcase color="#3269DB" size={20}/><Title order={6} c={"#3269DB"}>19+ Years</Title></Group>
                        <Text size="xs" c={"#5F6D7A"}> Experience</Text>
                        </div>
                        <hr/>
                        <div>
                        <Group><IconThumbUp color="#3269DB" size={20}/> <Title order={6} c={"#3269DB"}>99%</Title></Group>
                        <Text size="xs"c={"#5F6D7A"}> Recommended</Text>
                        </div>
                      </Group>
                      </Stack>

                      <Button fullWidth variant="outline" size="md">Book Appointment</Button>
                      </Group>
                    </Card>
                    </Carousel.Slide>
                  <Carousel.Slide>
                    <Card shadow="lg">
                      <Group gap={"md"}>
                      <Image src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png" radius={"lg"} w={150}></Image>
                      <Stack gap={"lg"} justify="space-between">
                      <div>
                      <Title order={4} c={"#3269DB"}>Dr. Deepak Kumar Sinha</Title>
                      <Text size="xs" c={"#5F6D7A"}>General</Text>
                      <Text size="xs" c={"#5F6D7A"}>Surgery, Proctology, Laproscopic Surg...</Text>
                      </div>
                      <Group>
                        <div>
                        <Group gap={"sm"}><IconBriefcase color="#3269DB" size={20}/><Title order={6} c={"#3269DB"}>19+ Years</Title></Group>
                        <Text size="xs" c={"#5F6D7A"}> Experience</Text>
                        </div>
                        <hr/>
                        <div>
                        <Group><IconThumbUp color="#3269DB" size={20}/> <Title order={6} c={"#3269DB"}>99%</Title></Group>
                        <Text size="xs"c={"#5F6D7A"}> Recommended</Text>
                        </div>
                      </Group>
                      </Stack>

                      <Button fullWidth variant="outline" size="md">Book Appointment</Button>
                      </Group>
                    </Card>
                    </Carousel.Slide>
                  <Carousel.Slide>
                    <Card shadow="lg">
                      <Group gap={"md"}>
                      <Image src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png" radius={"lg"} w={150}></Image>
                      <Stack gap={"lg"} justify="space-between">
                      <div>
                      <Title order={4} c={"#3269DB"}>Dr. Deepak Kumar Sinha</Title>
                      <Text size="xs" c={"#5F6D7A"}>General</Text>
                      <Text size="xs" c={"#5F6D7A"}>Surgery, Proctology, Laproscopic Surg...</Text>
                      </div>
                      <Group>
                        <div>
                        <Group gap={"sm"}><IconBriefcase color="#3269DB" size={20}/><Title order={6} c={"#3269DB"}>19+ Years</Title></Group>
                        <Text size="xs" c={"#5F6D7A"}> Experience</Text>
                        </div>
                        <hr/>
                        <div>
                        <Group><IconThumbUp color="#3269DB" size={20}/> <Title order={6} c={"#3269DB"}>99%</Title></Group>
                        <Text size="xs"c={"#5F6D7A"}> Recommended</Text>
                        </div>
                      </Group>
                      </Stack>

                      <Button fullWidth variant="outline" size="md">Book Appointment</Button>
                      </Group>
                    </Card>
                    </Carousel.Slide>
                  
                </Carousel>
                </Stack>
              </Grid.Col>
              <Grid.Col span={8} mt={"lg"}>
                <div className="prose max-w-full ">
                <PortableText value={pageData.content}/>
                </div>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={3} pos={"relative"}>
            <Card shadow="sm" padding="lg" radius="md" withBorder pos={"sticky"} top={24}>
              <Title order={3}>Request a callback</Title>
              <Text>
                {" "}
                Speak to one of our representatives by filling the form below
              </Text>
              <AppointmentForm></AppointmentForm>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>

      <Stories />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FrequentlyAskedQuestions />
        <BookConsultation />
      </div>
    </>
  );
}
