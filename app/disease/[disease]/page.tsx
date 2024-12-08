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
} from "@mantine/core";
import DiseaseImage from "./diseaseImage.png";
import Stories from "../../components/Stories/Stories";
import Specialities from "../../components/Specialities/Specialities";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconCircleCheck,
  IconHeart,
  IconHeartbeat,
  IconMessages,
  IconStethoscope,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export default function Page({ params }: { params: { disease: string } }) {
  const disease = params.disease;
  const formattedDisease =
    disease.charAt(0).toLocaleUpperCase() + disease.slice(1);

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div style={{ padding: "24px" }}>
        <Grid grow gutter={"lg"}>
          <Grid.Col span={8}>
            <Grid grow gutter={"md"}>
              <Grid.Col span={6}>
                <Group my={"lg"}>
                  <Title>
                    {" "}
                    Best Treatment for {formattedDisease} in Delhi - NCR{" "}
                  </Title>
                  <Text>
                    {" "}
                    A lipoma is a slow-growing, noncancerous lump of fatty
                    tissue that is mostly painless and non-cancerous. They
                    commonly appear on the neck, shoulders, back, belly, arms,
                    and thighs. Know all about Lipoma Treatment in Noida.
                  </Text>
                </Group>
                <Group my={"md"}>
                  <Grid gutter={"md"}>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"space-between"} align={"center"}>
                          <IconHeartbeat
                            style={{ color: "#FF990C" }}
                          ></IconHeartbeat>
                          <Title order={4}>100%</Title>
                        </Flex>
                        <Text size="xs">Latest Procedures</Text>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"space-between"} align={"center"}>
                          <IconStethoscope
                            style={{ color: "#FF990C" }}
                          ></IconStethoscope>
                          <Title order={4}>50+</Title>
                        </Flex>
                        <Text size="xs">Expert Surgeons</Text>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"space-between"} align={"center"}>
                          <IconMessages
                            style={{ color: "#FF990C" }}
                          ></IconMessages>
                          <Title order={4}>1:1</Title>
                        </Flex>
                        <Text size="xs">Personal Support</Text>
                      </Card>
                    </Grid.Col>
                  </Grid>
                </Group>
                <Group my={"md"}>
                  <Flex gap={"md"} wrap={"wrap"}>
                    <Button size="lg" variant="filled">
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
                  <Grid.Col span={6}>
                    <Card style={{ background: "#F4F7FB" }} padding={"sm"}>
                      <Title order={4}>Why opt for Lipoma Treatment?</Title>
                      <Card.Section p={"md"}>
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
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                        </List>
                      </Card.Section>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card style={{ background: "#FFF8F0" }} padding={"sm"}>
                      <Title order={4}>Why opt for Lipoma Treatment?</Title>
                      <Card.Section p={"md"}>
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
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                        </List>
                      </Card.Section>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card style={{ background: "#FFF8F0" }} padding={"sm"}>
                      <Title order={4}>Why opt for Lipoma Treatment?</Title>
                      <Card.Section p={"md"}>
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
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                        </List>
                      </Card.Section>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card style={{ background: "#F4F7FB" }} padding={"sm"}>
                      <Title order={4}>Why opt for Lipoma Treatment?</Title>
                      <Card.Section p={"md"}>
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
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                          <List.Item> Item 1</List.Item>
                        </List>
                      </Card.Section>
                    </Card>
                  </Grid.Col>
                </Grid>
                <hr style={{ margin: "2rem 0", color: "grey" }} />
              </Grid.Col>

              <Grid.Col span={8}>
                <Title>Featured Treatments</Title>
                <Flex wrap={"wrap"} gap={"md"}>
                  <Card style={{ background: "#F4F7FB" }} padding={"lg"}>
                    <Text size="md">Treatment 1</Text>
                  </Card>
                  <Card style={{ background: "#FFF8F0" }} padding={"lg"}>
                    <Text size="md">Treatment 1</Text>
                  </Card>
                </Flex>
              </Grid.Col>

              <Grid.Col span={8}>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Element position</Table.Th>
                      <Table.Th>Element name</Table.Th>
                      <Table.Th>Symbol</Table.Th>
                      <Table.Th>Atomic mass</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                  <Table.Caption>Scroll page to see sticky thead</Table.Caption>
                </Table>
              </Grid.Col>
              <Grid.Col span={8}>
                <Title>Our Expert Doctors</Title>
                <Carousel slideSize="70%" height={200} slideGap="md" loop>
                  <Carousel.Slide>1</Carousel.Slide>
                  <Carousel.Slide>2</Carousel.Slide>
                  <Carousel.Slide>3</Carousel.Slide>
                </Carousel>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>Request a callback</Title>
              <Text>
                {" "}
                Speak to one of our representatives by filling the form below
              </Text>
              <AppointmentForm></AppointmentForm>
            </Card>
          </Grid.Col>
        </Grid>
      </div>

      <Stories />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FrequentlyAskedQuestions />
        <BookConsultation />
      </div>
    </>
  );
}
