"use client";
import { Carousel } from "@mantine/carousel";
import { Box, Image, rem, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./OurDoctors.module.css";
const doctorsData = [
  {
    img: "/assets/doctor.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
  {
    img: "/assets/doctor.png",
    name: "Dr. R. Deepak",
    domain: "MBBS, MS - General Surgery Urologist",
    experience: 16,
  },
  {
    img: "/assets/doctor.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
  {
    img: "/assets/doctor.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
  {
    img: "/assets/doctor.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
  {
    img: "/assets/doctor.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
  {
    img: "/assets/doctor.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
  {
    img: "/assets/doctor.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
];
const OurDoctors = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Box my={50}>
      <Title ta="center" c="#1D3557" fz={rem(48)}>
        Meet Our Talented Doctors
      </Title>
      <Text ta="center" c="#6D758F" maw={400} m="20px auto">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam.
      </Text>
      <Carousel
        slideSize={{ base: "100%", sm: "fit-content" }}
        slideGap={{ base: "xl", sm: 2 }}
        align="start"
        slidesToScroll={mobile ? 1 : 1}
        loop
        classNames={{ root: classes.carousel__root }}
      >
        {doctorsData.map(
          (
            el: {
              img: string;
              name: string;
              domain: string;
              experience: number;
            },
            index: number
          ) => (
            <Carousel.Slide key={index} className={classes.box}>
              <Image src={el.img} height={236} fit="contain" alt={el.name} />
              <Box my={20}>
                <Text c="#023E8A" fz={rem(20)}>
                  {el.name}
                </Text>
                <Text c="#999999" my={10} className={classes.domain}>
                  {el.domain}
                </Text>
                <Text c="#999999">{el.experience}+ Years experience</Text>
              </Box>
            </Carousel.Slide>
          )
        )}
      </Carousel>
    </Box>
  );
};
export default OurDoctors;
