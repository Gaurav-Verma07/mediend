"use client";
import { Box, Button, Divider, rem, Text } from "@mantine/core";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCircle,
  IconCopyright,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <Box className={classes.main}>
      <Box className={classes.main__box}>
        <Box className={classes.top}>
          <Box>
            <Button bg="#FF990C" mr={10}>
              Get a Consultation
            </Button>
            <Button variant="outline" className={classes.order__btn}>
              Order a call
            </Button>
          </Box>
          <Box>
            <Button className={classes.social} mr={10}>
              <IconBrandTelegram />
            </Button>
            <Button className={classes.social}>
              <IconBrandWhatsapp />
            </Button>
          </Box>
        </Box>
        <Box className={classes.middle__box}>
          <Box className={classes.box_company}>
            <Box className={classes.middle__box_upper}>
              <IconCircle size="15px" color="#FF990C" />{" "}
              <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                Our Company
              </Text>
            </Box>
            <Text>History</Text>
            <Text>Partnership</Text>
            <Text>News</Text>
            <Text>Contact</Text>
          </Box>
          <Box className={classes.box__surgery}>
            <Box className={classes.middle__box_upper}>
              <IconCircle size="15px" color="#FF990C" />
              <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                {" "}
                Surgery
              </Text>
            </Box>
            <Text mb={8}>Laser Surgery</Text>
            <Text mb={8}>Laparoscopy Surgery</Text>
            <Text mb={8}>Cosmetic Surgery</Text>
            <Text mb={8}>Ear Surgery</Text>
            <Text mb={8}>Plastic Surgery</Text>
            <Text mb={8}>Orthopedics Surgery</Text>
            <Text mb={8}>Veins Surgery</Text>
            <Text mb={8}>Eye Surgery</Text>
          </Box>
          <Box className={classes.patients}>
            <Box className={classes.middle__box_upper}>
              <IconCircle size="15px" color="#FF990C" />
              <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                {" "}
                For Patients
              </Text>
            </Box>
            <Text>Certificates</Text>
            <Text>Testimonials</Text>
          </Box>
          <Box className={classes.contact}>
            <Box my={10}>
              <Text fz="20px">+1 891 989-11-91</Text>
              <Text>info@mediend.com</Text>
            </Box>
            <Box my={10}>
              <Text>Registered Office Address</Text>
              <Text>
                GF 10A, 81, Vasundhara, Ghaziabad, Uttar Pradesh 201012{" "}
              </Text>
            </Box>
            <Box my={10}>
              <Text>Corporate Office Address</Text>
              <Text>
                H-166, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh
                201301
              </Text>
            </Box>
            <Box my={10}>
              <Text c="#A9B1BC" fz={28}>
                9.00—18.00
              </Text>
              <Text className={classes.dates}>
                Mo <div className={classes.divider}></div> Fr
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.box__bottom}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <IconCopyright /> 2023 - Copyright
        </Box>
        <Text>Privacy</Text>
      </Box>
    </Box>
  );
};
export default Footer;
