"use client";
import { Box, Button, Grid, Image, SimpleGrid, Text } from "@mantine/core";
import { useState } from "react";
import classes from "./DiseaseList.module.css";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { newDiseaseList } from "./diseaseListData";

const DiseaseList = () => {
  const mobile = useMediaQuery(`(min-width: 1100px)`);
  const smallmobile = useMediaQuery(`(min-width: 600px)`);
  const [isShow, setIsShow] = useState(false);
  return (
    <Box className={classes.main}>
      <Grid>
        {(!isShow
          ? newDiseaseList.slice(0, mobile ? 8 : 6)
          : newDiseaseList
        ).map((el, index) => (
          <Grid.Col
            span={!smallmobile ? 4 : mobile ? 1.5 : 3}
            className={classes.box}
            key={index}
          >
            <Image
              src={el.img}
              alt={el.title}
              height={70}
              width={70}
              fit="contain"
              data-aos="zoom-in"
            />
            <Text fz={14} my={20}>
              {el.title}
            </Text>
          </Grid.Col>
        ))}
      </Grid>
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
