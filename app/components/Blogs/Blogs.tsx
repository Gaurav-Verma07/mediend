"use client";
import { Anchor, Box, Button, Image, rem, Text, Title } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import classes from "./Blogs.module.css";
const blogsData = [
  {
    img: "/assets/blogs.png",
    title:
      "Gynecomastia Surgery: Causes, Symptoms, and Treatment Optimal to use for good ",
    info: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    link: "https://mediend.com/blogs-wp/gynecomastia-causes-symptoms-treatment-and-cost/",
  },
  {
    img: "/assets/blogs.png",
    title: "What is Lasik Eye Surgery? Treatment and Benefits",
    info: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    link: "https://mediend.com/blogs-wp/what-is-lasik-surgery-treatment-and-benefits/",
  },
  {
    img: "/assets/blogs.png",
    title: "Lipoma Causes, Symptoms, And Effective Prevention Methods",
    info: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    link: "https://mediend.com/blogs-wp/lipoma-causes-symptoms-and-treatment/",
  },
];
const Blogs = () => {
  return (
    <Box my={60}>
      <Title className={classes.main__title}>Latest Blogs</Title>
      <Box className={classes.main__box}>
        {blogsData.map((el, index: number) => (
          <Box key={index} maw={353} className={classes.box}>
            <Image src={el.img} height={200} fit="unset" alt={el.title} />
            <Box className={classes.box__data}>
              <Text className={classes.box__title} fw={600}>
                {el.title}
              </Text>
              <Text c="#6D758F" my={10}>
                {el.info}
              </Text>
              <Box className={classes.box__footer}>
                <Text c="#6D758F" fw={600}>
                  {el.date}
                </Text>
                <Anchor href={el.link} className={classes.btn} p={8}>
                  <IconArrowNarrowRight color="#fff" />
                </Anchor>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Blogs;
