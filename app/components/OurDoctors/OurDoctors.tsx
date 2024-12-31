"use client";
import { Carousel } from "@mantine/carousel";
import { Box, Image, rem, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { useEffect, useState } from "react";
import { Doctor } from "../../doctor/[doctorName]/page";

import classes from './OurDoctors.module.css'




const OurDoctors = () => {

  const [pageData, setPageData] = useState<Doctor[] | null >(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setIsLoading(true)
    fetch('https://7rljkuk3.apicdn.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27doctor%27%5D+%7C+order%28_createdAt+desc%29%7B%0A++title%2C%0A++speciality%2C%0A++%22slug%22%3Aslug.current%2C%0A++degrees%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++yearsOfExperience%2C%0A++aboutDoctor%2C%0A++treatments%2C%0A++%22reviews%22%3A+reviews%5B%5D%7B%0A++++name%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++review%2C%0A++++highlight%0A++%7D%2C%0A++faqs%0A%7D', {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then((data) => {
      console.log('Fetched data:', data);
      setPageData(data.result);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setError(error);
      setIsLoading(false);
    });
  }, [])



  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Box my={50}>
      <Title ta="center" c="#1D3557" fz={rem(48)} data-aos="zoom-in-up">
        Meet Our Talented Doctors
      </Title>
      <Text ta="center" c="#6D758F" maw={400} m="20px auto">
        Meet our experienced doctors dedicated to providing exceptional care and innovative treatments.
      </Text>
      <Box className={classes.carousel_main}>
        <Carousel
          slideSize={{ base: "100%", sm: "fit-content" }}
          slideGap={{ base: "xl", sm: 2 }}
          align="start"
          slidesToScroll={1}
          loop={true}
          classNames={{ root: classes.carousel__root }}
        >
          {pageData&& pageData.map(
            (
              doctor,index
            ) => (
              <Carousel.Slide key={index} className={classes.box}>
                <Image
                  src={doctor.imageUrl}
                  height={236}
                  fit="contain"
                  alt={doctor.title}
                  data-aos={index % 2 ? "zoom-in-up" : "zoom-in-down"}
                />
                <Box my={20}>
                  <Text c="#023E8A" px={10} fz={rem(20)}>
                    {doctor.title}
                  </Text>
                  <Text c="#999999" my={10} px={10} className={classes.domain}>
                    {doctor.speciality}
                  </Text>
                  <Text c="#999999" px={10}>
                    {doctor.yearsOfExperience}+ Years experience
                  </Text>
                </Box>
              </Carousel.Slide>
            )
          )}
        </Carousel>
      </Box>
    </Box>
  );
};
export default OurDoctors;
