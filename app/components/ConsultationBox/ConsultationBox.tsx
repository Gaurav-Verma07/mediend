"use client";
import { Anchor, Box, Button, Image, rem, Text, Title } from "@mantine/core";
import classes from "./ConsultationBox.module.css";
import { IconArrowNarrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
const ConsultationBox = () => {
  return (
    <Box>
      <Box className={classes.box}>
        <Image src="/assets/nurse.png" className={classes.img} />
        <Box className={classes.infoBox}>
          <Title fz={rem(30)} c="#1D3557" mb={20}>
            Treatment Cost Calculator
          </Title>
          <Text>
            Get a free consultation from our top surgeons having experience of
            15+ years who can give you more clarity on your surgery cost.
          </Text>
        </Box>
        <Box className={classes.btnBox}>
          <Button
            bg="#FF990C"
            leftSection={<IconBrandWhatsapp />}
            rightSection={<IconArrowNarrowRight />}
            size="xl"
            radius="xl"
            mb={20}
          >
            Whatsapp Expert
          </Button>
          <Button
            type="submit"
            component="a"
            href="tel:+918750300099"
            variant="outline"
            c="#626262"
            rightSection={<IconArrowNarrowRight />}
            size="xl"
            radius="xl"
          >
            +91 8750300099
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsultationBox;
