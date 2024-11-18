"use client";
import { Box, Button, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import classes from "./Specialities.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { specialitiesData } from "./specialitiesData";
const Specialities = () => {
  const mobile = useMediaQuery(`(min-width: 800px)`);

  return (
    <Box my={50} mx={10}>
      <Title ta="center" my={20} className={classes.main__title}>
        Our Specialities
      </Title>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {specialitiesData.map((el, index: number) => (
          <Box key={index} className={classes.box}>
            <Image
              src={el.img}
              width={mobile ? 100 : 130}
              height={mobile ? 100 : 130}
              bg="#D5E9FF"
              fit="contain"
              style={{ borderRadius: 8 }}
              alt={el.title}
            />
            <Box className={classes.textbox}>
              <Text fw={700} c="#6D758F">
                {el.title}
              </Text>
              <Text c="#6D758F" className={classes.box__info}>
                {el.info}
              </Text>
              <Box className={classes.btnBox}>
                <Button mt={5} p={0} w={40} bg="#023E8A">
                  <IconArrowNarrowRight />
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Specialities;
