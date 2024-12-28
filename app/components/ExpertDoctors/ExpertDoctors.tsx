"use client";
import {
  Card,
  Group,
  ScrollArea,
  Skeleton,
  Box,
  Text,
  Title,
  Divider,
  Button,
  Flex,
} from "@mantine/core";
import {
  IconBriefcase,
  IconCalendarWeek,
  IconThumbUp,
} from "@tabler/icons-react";

const doctors = [
  {
    name: "Dr. Deepak Kumar Sinha",
    image: "",
    type: "General",
    specialities: "Surgery, Proctology, Laproscopic Surgery, Proctoscopicnic",
    experience: "19",
    recommended: "99",
  },
  {
    name: "Dr. Deepak Kumar Sinha",
    image: "",
    type: "General",
    specialities: "Surgery, Proctology, Laproscopic Surgery, Proctoscopicnic",
    experience: "19",
    recommended: "99",
  },
];

const DoctorCard = ({ data }: any) => (
  <Card shadow="md" mx={5} my={30} w="max-content" p={30} radius={14}>
    <Card.Section>
      <Group>
        <Skeleton radius={14} w={84} h={114} />
        <Box>
          <Text c="#023E8A">{data.name}</Text>
          <Text c="dimmed" fz={11}>
            {data.type}
          </Text>
          <Text c="dimmed" fz={11}>
            {data.specialities}
          </Text>
          <Group bg="#F8F8F8" style={{ borderRadius: 5 }} p={6}>
            <Group gap={3} align="top">
              <IconBriefcase color="#023E8A" />
              <Box>
                <Text fz={17} c="#023E8A">
                  {data.experience}+ Years
                </Text>
                <Text fz={11} c="dimmed">
                  Experience
                </Text>
              </Box>
            </Group>
            <Divider color="#000" orientation="vertical" />
            <Group gap={3} align="top">
              <IconThumbUp color="#023E8A" />
              <Box>
                <Text fz={17} c="#023E8A">
                  {data.recommended}%
                </Text>
                <Text fz={11} c="dimmed">
                  Recommended
                </Text>
              </Box>
            </Group>
          </Group>
        </Box>
      </Group>
    </Card.Section>
    <Card.Section>
      <Button
        mt={10}
        radius="xl"
        fullWidth
        leftSection={<IconCalendarWeek />}
        color="#023E8A"
        variant="outline"
      >
        Book Appointment
      </Button>
    </Card.Section>
  </Card>
);

export const ExpertDoctors = () => {
  return (
    <Box maw={900} my={{ base: 60, sm: 80 }}>
      <Title>Our Expert Doctors</Title>
      <ScrollArea scrollbars="x" w="100%">
        <Flex>
          {doctors.map((el, index) => (
            <Box key={index} w="fit-content">
              <DoctorCard data={el} />
            </Box>
          ))}
        </Flex>
      </ScrollArea>
    </Box>
  );
};
