"use client";
import { Box, Button, Image, SimpleGrid, Text } from "@mantine/core";
import { useState } from "react";
import classes from "./DiseaseList.module.css";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
const data = [
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
  { title: "Piles", img: "/assets/piles.png" },
];
const DiseaseList = () => {
  const mobile = useMediaQuery(`(min-width: 1100px)`);
  const [isShow, setIsShow] = useState(false);
  return (
    <Box className={classes.main}>
      <Box className={classes.grid}>
        {(!isShow ? data.slice(0, mobile ? 8 : 4) : data).map((el, index) => (
          <Box className={classes.box} key={index}>
            <Image src={el.img} alt={el.title} height={70} width={70} />
            <Text mt={20}>{el.title}</Text>
          </Box>
        ))}
      </Box>
      <Box className={classes.buttonBox}>
        <Button
          variant="outline"
          c="#FF990C"
          className={classes.btn}
          onClick={() => setIsShow(!isShow)}
          rightSection={!isShow ? <IconChevronDown /> : <IconChevronUp />}
        >
          {!isShow ? "Show more" : "Show Less"}
        </Button>
      </Box>
    </Box>
  );
};
export default DiseaseList;
