"use client";
import {
  Grid,
  Box,
  Text,
  Paper,
  TextInput,
  Button,
  List,
  Stack,
  Flex,
} from "@mantine/core";
const aboutData = [
  {
    que: "Why Consider Lipoma Treatment?",
    ans: [
      "Sudden increase in size or discomfort",
      "Medication and steroids are ineffective",
      "Surgical removal is the most reliable solution",
    ],
  },
  {
    que: "Benefits of the Procedure",
    ans: [
      "Hassle-free insurance with complete support",
      "	No recurrence; return to work in 1-2 days",
      "	Painless 30-minute process with same-day discharge",
    ],
  },
  {
    que: "Why Choose MediEND?",
    ans: [
      "Experienced surgeons with 15+ years of expertise",
      "Over 10,000 successful procedures performed",
      "	Flexible 0% EMI options for affordable care",
    ],
  },
];
export const AboutAds = () => {
  return (
    <Flex
      align="center"
      wrap="wrap"
      justify={{ base: "center", lg: "space-between" }}
      my={50}
    >
      <Stack style={{ position: "relative" }}>
        {aboutData.map(
          ({ que, ans }: { que: string; ans: string[] }, index: number) => (
            <Paper
              key={index}
              p="md"
              my={{ base: "md", sm: "xl" }}
              maw={529}
              bg="#E9F1FF"
              radius={15}
            >
              <Text fw={600} fz={{ base: 18, sm: 25 }}>
                {que}
              </Text>
              <List type="unordered" my={10} listStyleType="disc">
                {ans.map((el: string, index) => (
                  <List.Item fz={{ base: 10, xs: 16 }} my={5} key={index}>
                    {el}
                  </List.Item>
                ))}
              </List>
            </Paper>
          )
        )}
      </Stack>

      <Paper visibleFrom="lg" shadow="sm" p="md" maw={390}>
        <Text fz={24} fw={500}>
          Get Rid for Lipoma
        </Text>
        <Text fz={12} c="dimmed" mb="md">
          Speak to one of our representatives by filling the form below
        </Text>
        <TextInput
          size="md"
          label="Patient Name"
          placeholder="Enter your name"
          mb="sm"
        />
        <TextInput
          size="md"
          label="Mobile Number"
          placeholder="Enter your number"
          mb="sm"
        />
        <TextInput size="md" label="City" placeholder="Noida" mb="sm" />
        <TextInput size="md" label="Condition" placeholder="Lipoma" mb="sm" />
        <Button size="md" fullWidth>
          Request a call back
        </Button>
      </Paper>
    </Flex>
  );
};
