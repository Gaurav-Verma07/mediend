"use client";
import { Box, Button, Modal, rem, Text } from "@mantine/core";
import classes from "./GetInTouch.module.css";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Appointment from "../Appointment/Appointment";
const GetInTouch = () => {
  const mobile = useMediaQuery(`(min-width: 1100px)`);
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);

  return (
    <Box>
      <Box className={`${classes.row} ${classes.row_only_1}`}>
        <Box className={classes.card_1}>
          <Text className={classes.card_1_text}>
            mediEND Surgery Care marks the beginning of a transformative
            journey, where each step forward brings us closer to a brighter
            tomorrow. With perseverance as our compass and hope as our fuel, we
            embark on a path towards a future filled with possibilities.
          </Text>
        </Box>
        <Box className={classes.card_2}>
          <Box className={classes.card_2_inner}>
            <Text className={classes.text_box_2}>
              “The Journey Begins: mediEND Surgery Care as a Gateway to
              Transformation”
            </Text>
            <Box mt={20}>
              <Button
                rightSection={<IconArrowNarrowRight />}
                size={mobile ? "xl" : "md"}
                bg="#fff"
                c="#023E8A"
                mr="20"
                data-aos="fade-right"
                onClick={modalOpen}
              >
                Get in touch
              </Button>
              <Button
                component="a"
                size={mobile ? "xl" : "md"}
                variant="outline"
                c="#fff"
                style={{ borderColor: "#fff" }}
                data-aos="fade-left"
                href="#bookfreeconsultation"
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={`${classes.row} ${classes.row_only_2}`}>
        <Box className={classes.card_2}>
          <Box>
            <Text className={classes.text_box_2}>Time to Listen.</Text>
            <Text className={classes.text_box_2}>Time to Feel. </Text>
            <Text className={classes.text_box_2}>Time to Heal.</Text>{" "}
            <Box mt={20}>
              <Button
                rightSection={<IconArrowNarrowRight />}
                size={mobile ? "xl" : "md"}
                bg="#fff"
                c="#023E8A"
                onClick={modalOpen}
                mr="20"
              >
                Get in touch
              </Button>
              <Button
                component="a"
                size={mobile ? "xl" : "md"}
                variant="outline"
                c="#fff"
                style={{ borderColor: "#fff" }}
                href="#bookfreeconsultation"
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={`${classes.card_1} ${classes.card_4}`}>
          <Text className={classes.card_1_text}>
            mediEND Surgery Care may mend the wounds of today, but it is our
            vision for a better tomorrow that fuels our resilience. As we
            navigate through the challenges, let us hold onto the belief that
            each surgery brings us closer to the future we envision.
          </Text>
        </Box>
      </Box>
      <Modal
        opened={modalOpened}
        onClose={modalClose}
        radius="lg"
        classNames={{
          content: classes.modal__content,
          header: classes.modal__header,
          title: classes.modal__title,
          close: classes.modal__close,
        }}
        title="Book Your FREE Consultation Now"
      >
        <Appointment />
      </Modal>
    </Box>
  );
};
export default GetInTouch;
