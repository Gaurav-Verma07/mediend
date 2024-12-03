"use client";
import { Carousel } from "@mantine/carousel";
import { Box, Image, rem, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./OurDoctors.module.css";

const doctorsData = [
  {
    img: "doctor_main/60)Dr.-Deepak.png",
    name: "Dr. Deepak Saha",
    domain: "MBBS, DNB - Cardiology Cardiologist",
    experience: 21,
  },
  {
    img: "doctor_main/dr.manoj-kumar_46.png",
    name: "Dr. Manoj Kumar",
    domain: "MD - Physician General Physician",
    experience: 23,
  },
  {
    img: "doctor_main/Dr.Nilesh_KUMAR_47.png",
    name: "Dr. Nilesh Kumar Dehariya",
    domain: "MBBS, MS - General Surgery General Surgeon",
    experience: 16,
  },
  {
    img: "doctor_main/46)Dr-Vikas-kumar-Vaibhav.png",
    name: "Dr. Vikas Kumar Vaibhav",
    domain: "Orthopaedic Surgery General Physician",
    experience: 12,
  },
  {
    img: "New_doctor_img/Dr. Kapil Agarwal.png",
    name: "Dr. Kapil Agarwal",
    domain: "MBBS, MD - General Medicine Neurologist",
    experience: 18,
  },
  {
    img: "img/docter_1.png",
    name: "Dr. Raj Kumar Singh",
    domain: "MBBS, MS General Surgeon",
    experience: 11,
  },
  {
    img: "img/docter_2.png",
    name: "Dr. Piyush Tiwari",
    domain: "MBBS, MS Ophthalmology",
    experience: 13,
  },
  {
    img: "New_doctor_img/Dr Ruchir Tewari.png",
    name: "Dr. Ruchir Tewari",
    domain: "MBBS, MS Ophthalmology",
    experience: 11,
  },
  {
    img: "New_doctor_img/drvk.png",
    name: "Dr. VK Tewari",
    domain: "MS(KGMC LUCKNOW) Ophthalmology",
    experience: 46,
  },
  {
    img: "img/docter_4.png",
    name: "Dr. Pradeep Kumar N",
    domain: "MBBS, DNB - Plastic Surgery Plastic Surgeon",
    experience: 12,
  },
  {
    img: "img/docter_3.png",
    name: "Dr. Amar Raghu",
    domain: "MBBS, MS - General Surgery, MCh Plastic Surgeon",
    experience: 26,
  },
  {
    img: "img/docter_5.png",
    name: "Dr. Sahil Singla",
    domain: "MBBS, DNB - General Surgery Plastic Surgeon",
    experience: 15,
  },
  {
    img: "New_doctor_img/Dr. Nikunj Mody.png",
    name: "Dr. Nikunj Mody",
    domain: "MS - General Surgery, MBBS Plastic Surgeon",
    experience: 17,
  },
  {
    img: "New_doctor_img/Dr. Manoj Pawar.png",
    name: "Dr. Manoj Pawar",
    domain: "M.B.B.S, M.S., M.Ch., D.N.B Cosmetic Surgeon",
    experience: 17,
  },
  {
    img: "img/docter_6.png",
    name: "DR. PARMESHWAR B. BAMBRULE",
    domain: "MBBS, DNB - General Surgery Bariatric Surgeon",
    experience: 10,
  },
  {
    img: "img/docter_7.png",
    name: "Dr. Kapil Agrawal",
    domain: "MBBS, MS, MRCS (LONDON, U.K) Bariatric Surgeon",
    experience: 22,
  },
  {
    img: "New_doctor_img/Dr. Sunny Agarwal.png",
    name: "Dr. Sunny Agarwal",
    domain: "MBBS, MS - General Surgery Laparoscopic Surgeon",
    experience: 15,
  },
  {
    img: "doctor_image/Dr.-Ankit-Potdar-1.png",
    name: "Dr. Ankit Potdar",
    domain: "MBBS, MS - General Surgery Bariatric Surgeon",
    experience: 13,
  },
  {
    img: "doctor_image/Dr.Shweta-Jain_2.png",
    name: "Dr. Shweta Jain",
    domain: "MBBS, DNB ,M.DOS Ophthalmologist",
    experience: 11,
  },
  {
    img: "doctor_main/47)Dr.Jatin-Ashar.png",
    name: "Dr. Jatin Ashar",
    domain: "MBBS, MD - Ophthalmology Ophthalmologist",
    experience: 21,
  },
  {
    img: "doctor_image/Dr.Vishal-Maniar_4.png",
    name: "Dr. Vishal Maniar",
    domain: "MBBS, DNB - Ophthalmology Ophthalmologist",
    experience: 17,
  },
  {
    img: "doctor_image/Dr.Anitha-B.R-5.png",
    name: "Dr. Anitha B.R",
    domain: "MBBS, MD - Obstetrics Gynecologist",
    experience: 18,
  },
  {
    img: "doctor_image/Dr.Vicky-Jain_6.png",
    name: "Dr. Vicky Jain",
    domain: "MCh MBBS - Plastic Gynecologist",
    experience: 18,
  },
  {
    img: "doctor_image/Dr.-Om-Prakash_7.png",
    name: "Dr. Om Prakash",
    domain: "MBBS General Physician",
    experience: 34,
  },
  {
    img: "doctor_main/50)dr.pradnya-roy.png",
    name: "Dr. Pradnya Roy",
    domain: "MBBS, DGO, MS - Obstetrics Gynecologist",
    experience: 24,
  },
];


const OurDoctors = () => {
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
                <Image
                  src={`https://test.mediend.com/${el.img}`}
                  height={236}
                  fit="contain"
                  alt={el.name}
                  data-aos={index % 2 ? "zoom-in-up" : "zoom-in-down"}
                />
                <Box my={20}>
                  <Text c="#023E8A" px={10} fz={rem(20)}>
                    {el.name}
                  </Text>
                  <Text c="#999999" my={10} px={10} className={classes.domain}>
                    {el.domain}
                  </Text>
                  <Text c="#999999" px={10}>
                    {el.experience}+ Years experience
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
