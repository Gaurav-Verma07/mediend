import {
  Box,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

const valuesData = [
  {
    title: "Innovation",
    info: "We embrace change and constantly seek out new ways to improve and innovate in everything we do.",
    icon: "/assets/values/Brain.svg",
  },
  {
    title: "Excellence",
    info: "We strive for excellence in every project, delivering results that exceed expectations.",
    icon: "/assets/values/Sparkle.svg",
  },
  {
    title: "Collaboration",
    info: "We believe in the power of teamwork and work closely with our clients to ensure their vision is brought to life.",
    icon: "/assets/values/UsersThree.svg",
  },
];

const OurValues = () => {
  return (
    <>
      <Flex
        justify={{ base: "center", lg: "space-between" }}
        wrap="wrap"
        my={{ base: 60, md: 200 }}
      >
        <Box maw={590} my={20}>
          <Title c="#2967B0" fz={{ base: 24, sm: 40 }}>
            Our Vision
          </Title>
          <Text fw={300} c="#1C1B1A" fz={{ base: 20, sm: 32 }}>
            We aim to innovate and create impactful digital experiences that
            empower brands to succeed and connect meaningfully with their
            audiences in a dynamic digital landscape.
          </Text>
        </Box>
        <Box maw={590} my={20}>
          <Title c="#2967B0" fz={{ base: 24, sm: 40 }}>
            Our Mision
          </Title>
          <Text fw={300} c="#1C1B1A" fz={{ base: 20, sm: 32 }}>
            We aim to innovate and create impactful digital experiences that
            empower brands to succeed and connect meaningfully with their
            audiences in a dynamic digital landscape.
          </Text>
        </Box>
      </Flex>
      <Title my={80} c="#2967B0" ta="center" fz={{ base: 24, sm: 40 }}>
        Our Values
      </Title>
      <Flex
        wrap="wrap"
        justify={{ base: "center", lg: "space-between" }}
        align="center"
      >
        {valuesData.map((el, index: number) => (
          <Stack align="center" key={index} maw={389} justify="center">
            <Group>
              <Image
                alt={el.title}
                style={{
                  border: "1px solid rgba(28, 27, 26, 0.1)",
                  padding: 10,
                  borderRadius: 100,
                }}
                src={el.icon}
              />
              <Title fz={{ base: 28, sm: 44 }} c="#2967B0" fw={400}>
                {el.title}
              </Title>
            </Group>
            <Text
              my={{ base: 20, sm: 40 }}
              lh="120%"
              c="#1C1B1A"
              fw={300}
              fz={{ base: 20, sm: 27 }}
              ta="center"
            >
              {el.info}
            </Text>
          </Stack>
        ))}
      </Flex>
    </>
  );
};
export default OurValues;
