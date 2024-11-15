"use client";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Box,
  Image,
} from "@mantine/core";
import classes from "./Herobox.module.css";
import { data } from "./data";
import { IconArrowRight } from "@tabler/icons-react";

interface CardProps {
  image: string;
  title: string;
  category: string;
  info: string;
}

function Card({ image, title, category, info }: CardProps) {
  return (
    <Paper
      shadow="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <Box className={classes.cardData}>
        <Box className={classes.box__top}>
          <Image
            src="assets/hero_icon.png"
            height={44}
            width={42}
            fit="contain"
            alt="hero icon"
          />
          <Text className={classes.category}>{category}</Text>
        </Box>
        <Title fz={rem(64)} order={3} className={classes.title}>
          {title}
        </Title>
        <Text c="white" fz={16}>
          {info}
        </Text>
      </Box>
      <Box className={classes.btn__book}>
        <Button
          variant="outline"
          radius="xl"
          size="xl"
          fz={14}
          rightSection={<IconArrowRight />}
          className={classes.btn}
        >
          Book Free Consulatation
        </Button>
      </Box>
    </Paper>
  );
}

const Herobox = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(min-width: 1100px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      //   slideSize={{ base: "100%", sm: "50%" }}
      //   slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={1}
      //   speed={5}
      controlsOffset="xl"
      controlSize={40}
      loop
      withControls={!mobile ? false : true}
      withIndicators={mobile ? false : true}
    >
      {slides}
    </Carousel>
  );
};

export default Herobox;
