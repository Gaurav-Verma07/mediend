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
import { usePathname } from "next/navigation";

const surgeryItems = [
  { text: "Gynecomastia", slug: "gynecomastia" },
  { text: "Lipoma", slug: "lipoma" },
  { text: "Lasik", slug: "lasik" },
  { text: "Cataract", slug: "cataract" },
  { text: "Vericose veins", slug: "vericose-veins" },
  { text: "Piles", slug: "piles" },
  { text: "Fissure", slug: "fissure" },
  { text: "Fistula", slug: "fistula" },
  { text: "Gallstone", slug: "gallstone" },
  { text: "Circumcision", slug: "circumcision" },
  { text: "Cyst", slug: "cyst" },
  { text: "Kidney stone", slug: "kidney-stone" },
  { text: "Knee replacement", slug: "knee-replacement" },
  { text: "Liposuction", slug: "liposuction" },
];

const quickLinks = [
  { label: "About Us", link: "/about-us" },
  { label: "Our Experts", link: "https://mediend.com/our-expert.php" },
  { label: "Blogs", link: "/blogs" },
  { label: "Careers", link: "https://mediend.com/career.php" },
  { label: "Contact Us", link: "https://mediend.com/contact.php" },
  { label: "Privacy & Policy", link: "/privacy-policy" },
  {
    label: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  { label: "Disclaimer", link: "/disclaimer" },
  { label: "Autism", link: "https://mediend.com/medicine.php" },
];
const Footer = () => {
  const mobile = useMediaQuery(`(min-width: 700px)`);
  const pathname = usePathname();
  const isDiseasesPage = pathname.startsWith("/diseases");
  return (
    <Box style={{ display: isDiseasesPage ? "none" : "block" }}>
      <Box className={classes.main}>
        <Box className={classes.main__box}>
          <Box className={classes.top}>
            <Box my={10}>
              <Button mr={10} my={5}>
                Get a Consultation
              </Button>
              <Button my={5} variant="outline" className={classes.order__btn}>
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
                    <IconCircle size="15px" color="#1ec8bb" />
{" "}
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
                    <IconCircle size="15px" color="#1ec8bb" />

                    <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                      {" "}
                      Surgery
                    </Text>
                  </Box>
                  {surgeryItems.map((el, index: number) => (
                    <Link href={`/disease/${el.slug}`} key={index}>
                    <Text >{el.text}</Text>
                    </Link>
                  ))}
                </Box>
                <Box className={classes.box__surgery}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#1ec8bb" />

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
                    <IconCircle size="15px" color="#1ec8bb" />
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
                    <IconCircle size="15px" color="#1ec8bb" />
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
                      <IconCircle size="15px" color="#1ec8bb" />

                      <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                        {" "}
                        Surgery
                      </Text>
                    </Box>
                    {surgeryItems.map((el, index: number) => (
                      <Link href={`/disease/${el.slug}`} key={index}>
                      <Text >{el.text}</Text>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </>
            )}
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              {!mobile && (
                <Box className={classes.box_company}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#1ec8bb" />
{" "}
                    <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                      Our Company
                    </Text>
                  </Box>
                  <Text>History</Text>
                  <Text>Partnership</Text>
                  <Text>News</Text>
                  <Text>Contact</Text>
                </Box>
              )}
              {!mobile && (
                <Box className={classes.patients} style={{ textAlign: "left" }}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#1ec8bb" />

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
              {/* <Box my={10}>
                <Text c="#A9B1BC" fz={28}>
                  9.00—18.00
                </Text>
                <Text className={classes.dates}>
                  Mo <div className={classes.divider}></div> Fr
                </Text>
              </Box> */}
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
        <Image src="/assets/footer_logo.png" h={100} fit="contain" alt="logo" />
      </Box>
    </Box>
  );
};
export default Footer;
