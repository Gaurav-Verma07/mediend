import { Box, Flex, ScrollArea, SimpleGrid, Title } from "@mantine/core";
import TeamCard from "../TeamCard/TeamCard";

const managementTeam = [
  {
    image: "/assets/getintouch.png",
    name: "Dr. Emily Johnson",
    title: "Pediatrician",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/getintouch.png",
    name: "Dr. Emily Johnson",
    title: "Pediatrician",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/getintouch.png",
    name: "Dr. Emily Johnson",
    title: "Pediatrician",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/getintouch.png",
    name: "Dr. Emily Johnson",
    title: "Pediatrician",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/getintouch.png",
    name: "Dr. Emily Johnson",
    title: "Pediatrician",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/getintouch.png",
    name: "Dr. Emily Johnson",
    title: "Pediatrician",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
];

const OurTeam = () => {
  return (
    <>
      <Title
        my={{ base: 40, sm: 80 }}
        c="#2967B0"
        ta="center"
        fz={{ base: 24, sm: 40 }}
      >
        Our Management Team
      </Title>
      <Box mx="auto" w="fit-content">
        <SimpleGrid
          visibleFrom="lg"
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
        >
          {managementTeam.map((el, index) => (
            <TeamCard key={index} data={el} />
          ))}
        </SimpleGrid>
        <ScrollArea hiddenFrom="lg" scrollbars="x" w="95vw">
          <Flex>
            {managementTeam.map((el, index) => (
              <TeamCard key={index} data={el} />
            ))}
          </Flex>
        </ScrollArea>
      </Box>

      <Title
        my={{ base: 40, sm: 80 }}
        c="#2967B0"
        ta="center"
        fz={{ base: 24, sm: 40 }}
      >
        Our Core Team
      </Title>
      <Box mx="auto" w="fit-content">
        <SimpleGrid
          visibleFrom="lg"
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
        >
          {managementTeam.map((el, index) => (
            <TeamCard key={index} data={el} />
          ))}
        </SimpleGrid>
        <ScrollArea hiddenFrom="lg" scrollbars="x" w="95vw">
          <Flex>
            {managementTeam.map((el, index) => (
              <TeamCard key={index} data={el} />
            ))}
          </Flex>
        </ScrollArea>
      </Box>
    </>
  );
};

export default OurTeam;
