"use client";
import { Box, Button, Divider, Image, rem, Text } from "@mantine/core";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCircle,
  IconCopyright,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const surgeryItems = [
  "Gynecomastia",
  "Lipoma",
  "Lasik ",
  "Cataract",
  "Vericose veins",
  "Piles",
  "Fissure",
  "Fistula",
  "Gallstone",
  "Circumcision",
  "Cyst",
  "Kidney stone",
  "Knee replacement",
  "Liposuction",
];

const quickLinks = [
  { label: "About Us", link: "https://mediend.com/about-us.php" },
  { label: "Our Experts", link: "https://mediend.com/our-expert.php" },
  { label: "Blogs", link: "https://mediend.com/blogs-wp/" },
  { label: "Careers", link: "https://mediend.com/career.php" },
  { label: "Contact Us", link: "https://mediend.com/contact.php" },
  { label: "Privacy & Policy", link: "https://mediend.com/privacy-policy.php" },
  {
    label: "Terms & Conditions",
    link: "https://mediend.com/terms-condition.php",
  },
  { label: "Disclaimer", link: "https://mediend.com/disclaimer.php" },
  { label: "Autism", link: "https://mediend.com/medicine.php" },
];
const Footer = () => {
  const mobile = useMediaQuery(`(min-width: 700px)`);
  return (
    <Box>
      <Box className={classes.main}>
        <Box className={classes.main__box}>
          <Box className={classes.top}>
            <Box my={10}>
              <Button bg="#FF990C" mr={10}>
                Get a Consultation
              </Button>
              <Button variant="outline" className={classes.order__btn}>
                Order a call
              </Button>
            </Box>
            <Box my={10}>
              <Button
                component={Link}
                href="https://twitter.com/medi_end_"
                className={classes.social}
                mr={10}
                data-aos="zoom-in"
              >
                <Image
                  src="/assets/social/twitter.png"
                  fit="contain"
                  alt="twitter"
                  width={40}
                  height={40}
                />
              </Button>
              <Button
                component={Link}
                href="https://www.facebook.com/mediend.official"
                className={classes.social}
                mr={10}
                data-aos="zoom-out"
              >
                <Image
                  src="/assets/social/facebook.png"
                  fit="contain"
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Button>
              <Button
                component={Link}
                href="https://www.linkedin.com/company/medi-end/"
                className={classes.social}
                mr={10}
                data-aos="zoom-in"
              >
                <Image
                  src="/assets/social/linkedin.png"
                  fit="contain"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Button>{" "}
              <Button
                component={Link}
                href="https://www.instagram.com/mediend_officials/"
                className={classes.social}
                mr={10}
                data-aos="zoom-out"
              >
                <Image
                  src="/assets/social/instagram.png"
                  fit="contain"
                  alt="instagram"
                  width={40}
                  height={40}
                />
              </Button>{" "}
              <Button
                component={Link}
                href="https://www.youtube.com/@mediEND"
                className={classes.social}
                mr={10}
                data-aos="zoom-in"
              >
                <Image
                  src="/assets/social/youtube.png"
                  fit="contain"
                  alt="youtube"
                  width={40}
                  height={40}
                />
              </Button>
            </Box>
          </Box>
          <Box className={classes.middle__box}>
            {mobile && (
              <>
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
                  {surgeryItems.map((el: string, index: number) => (
                    <Text key={index}>{el}</Text>
                  ))}
                </Box>
                <Box className={classes.box__surgery}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#FF990C" />
                    <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                      {" "}
                      Quick Links
                    </Text>
                  </Box>
                  {quickLinks.map(
                    (el: { label: string; link: string }, index: number) => (
                      <Text
                        component={Link}
                        href={el.link}
                        style={{ display: "block" }}
                        key={index}
                      >
                        {el.label}
                      </Text>
                    )
                  )}
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
              </>
            )}
            {!mobile && (
              <>
                <Box className={classes.mobile__links}>
                  <Box className={classes.mobile__links_inner}>
                    <Box className={classes.box__surgery}>
                      <Box className={classes.middle__box_upper}>
                        <IconCircle size="15px" color="#FF990C" />
                        <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                          {" "}
                          Quick Links
                        </Text>
                      </Box>
                      {quickLinks.map(
                        (
                          el: { label: string; link: string },
                          index: number
                        ) => (
                          <Text
                            component={Link}
                            href={el.link}
                            style={{ display: "block" }}
                            key={index}
                          >
                            {el.label}
                          </Text>
                        )
                      )}
                    </Box>
                  </Box>
                  <Box className={classes.box__surgery}>
                    <Box className={classes.middle__box_upper}>
                      <IconCircle size="15px" color="#FF990C" />
                      <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                        {" "}
                        Surgery
                      </Text>
                    </Box>
                    {surgeryItems.map((el: string, index: number) => (
                      <Text key={index}>{el}</Text>
                    ))}
                  </Box>
                </Box>
              </>
            )}
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
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
              {!mobile && (
                <Box className={classes.patients} style={{ textAlign: "left" }}>
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
              )}
            </Box>
            <Box className={classes.contact}>
              <Box my={10}>
                <Text component="a" href="tel:+918750300099" fz="20px">
                  +91 8750300099
                </Text>
                <br />
                <Text component="a" href="mailto:info@mediend.com">
                  info@mediend.com
                </Text>
              </Box>
              <Box my={10}>
                <Text fw={700}>Registered Office Address</Text>
                <Text>
                  GF 10A, 81, Vasundhara, Ghaziabad, Uttar Pradesh 201012{" "}
                </Text>
              </Box>
              <Box my={10}>
                <Text fw={700}>Corporate Office Address</Text>
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
            <IconCopyright /> 2023 - Copyright. All Rights Reserved.
          </Box>
          <Text></Text>
        </Box>
      </Box>
      <Box className={classes.footer__bottom}>
        <Image
          src="/assets/footer_logo.png"
          height={100}
          fit="contain"
          alt="logo"
        />
      </Box>
    </Box>
  );
};
export default Footer;
