"use client";
import {
  Box,
  Button,
  Divider,
  Image,
  NumberInput,
  rem,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./BookConsultation.module.css";
const BookConsultation = () => {
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      disease: "",
    },

    validate: {
      name: (val: string) => (val.length !== 0 ? null : "Invalid email"),
      phone: (val: string) =>
        val.length === 10
          ? "Password should include at least 6 characters"
          : null,
      disease: (val: string) => (val.length !== 0 ? null : "Select a disease"),
    },
  });
  return (
    <Box className={classes.main}>
      <Box className={classes.bg}>
        <Image src="/assets/consult_bg.png" height={400} alt="consult bg" />
      </Box>
      <Box className={classes.info}>
        <Text c="#1D3557" fz={rem(30)} fw={600}>
          Get in Touch
        </Text>
        <Text>
          Tell us about your problems and we&apos;ll figure out the best
          treatment option for you.
        </Text>
      </Box>
      <Box className={classes.form}>
        <Box>
          <Text fz={24} fw={600}>
            Book Free Consultation
          </Text>
          <Divider c="#D7DEDD" my={15} />
          <form>
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              classNames={{ label: classes.label, input: classes.input__root }}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
              my={20}
            />
            <TextInput
              classNames={{ label: classes.label, input: classes.input__root }}
              label="Phone No."
              placeholder="+91 111222333"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              radius="md"
              my={20}
            />
            <Select
              classNames={{ label: classes.label, input: classes.input__root }}
              label="Select Disease"
              placeholder="Select"
              data={["React", "Angular", "Vue", "Svelte"]}
            />
            <Button radius="md" my={20} bg="#FF990C" fullWidth>
              Book
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default BookConsultation;
