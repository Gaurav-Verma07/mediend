import { Box, Flex, SimpleGrid, Title } from "@mantine/core";
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
      <Title my={80} c="#2967B0" ta="center" fz={{ base: 24, sm: 40 }}>
        Our Management Team
      </Title>
      <Box mx="auto" w="fit-content">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {managementTeam.map((el, index) => (
            <TeamCard key={index} data={el} />
          ))}
        </SimpleGrid>
      </Box>

      <Title my={80} c="#2967B0" ta="center" fz={{ base: 24, sm: 40 }}>
        Our Core Team
      </Title>
      <Box mx="auto" w="fit-content">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {managementTeam.map((el, index) => (
            <TeamCard key={index} data={el} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default OurTeam;
