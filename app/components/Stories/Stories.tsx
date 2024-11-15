"use client";
import { Avatar, Box, rem, Text, Title, useMantineTheme } from "@mantine/core";
import classes from "./Stories.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
const storiesData = [
  {
    img: "/assets/stories_1.png",
    quote: "“Strength to embrace my son and life again”",
    info: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    img: "/assets/stories_1.png",
    quote: "“We feel like we can finally live a normal life!”",
    info: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
  {
    img: "/assets/stories_1.png",
    quote: "“Strength to embrace my son and life again”",
    info: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    img: "/assets/stories_1.png",
    quote: "“We feel like we can finally live a normal life!”",
    info: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
  {
    img: "/assets/stories_1.png",
    quote: "“Strength to embrace my son and life again”",
    info: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    img: "/assets/stories_1.png",
    quote: "“We feel like we can finally live a normal life!”",
    info: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
  {
    img: "/assets/stories_1.png",
    quote: "“Strength to embrace my son and life again”",
    info: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    img: "/assets/stories_1.png",
    quote: "“We feel like we can finally live a normal life!”",
    info: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
];
const Stories = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Box className={classes.main} ta="center" py={60}>
      <Title c="#1D3557" fz={rem(48)}>
        Our Success Stories
      </Title>
      <Text maw={418} m="20px auto" c="#6D758F">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam.
      </Text>
      <Box className={classes.carousel_main}>
        <Carousel
          slideSize={{ base: "100%", sm: "50%" }}
          slideGap={{ base: rem(2), sm: "xl" }}
          align="start"
          slidesToScroll={mobile ? 1 : 1}
          loop
        >
          {storiesData.map((el, index: number) => (
            <Carousel.Slide key={index} className={classes.box}>
              <Avatar size="lg" src={el.img} bd="1px solid #B4B9C9" />
              <Box>
                <Text c="#023E8A" fz={rem(18)}>
                  {el.quote}
                </Text>
                <Text c="#6D758F">{el.info}</Text>
              </Box>
              <Text c="#6D758F" fw={600}>
                {el.name}
              </Text>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};
export default Stories;
