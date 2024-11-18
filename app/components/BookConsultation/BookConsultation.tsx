"use client";
import {
  Autocomplete,
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
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { diseases } from "./consultList";
const BookConsultation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const mobile = useMediaQuery(`(min-width: 1100px)`);
  const form_id = `https://docs.google.com/forms/d/e/${process.env.NEXT_PUBLIC_CONSULTATION_SHEET_ID}/formResponse?&submit=Submit`;
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      disease: "",
    },
    validate: {
      name: (val: string) => (val.length !== 0 ? null : "Invalid name"),
      disease: (val: string) => (val.length !== 0 ? null : "Select a disease"),
    },
  });
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(false);
      const formData = new FormData();
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_CONSULTATION_SHEET_ENTRY_1}`,
        form.values.name
      ); // Replace with your field's entry ID
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_CONSULTATION_SHEET_ENTRY_2}`,
        form.values.phone
      );
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_CONSULTATION_SHEET_ENTRY_3}`,
        form.values.disease
      );

      const response = await fetch(form_id, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };
  return (
    <Box className={classes.main}>
      <Box className={classes.bg}>
        <Image
          src="/assets/consult_bg.png"
          height={mobile ? 400 : 250}
          width={600}
          alt="consult bg"
        />
      </Box>
      <Box className={classes.info}>
        <Text c="#1D3557" fz={rem(30)} fw={600}>
          Get in Touch
        </Text>
        <Text my={15}>
          Tell us about your problems and we&apos;ll figure out the best
          treatment option for you.
        </Text>
      </Box>
      <Box className={classes.form} data-aos="zoom-in">
        <Box>
          <Text fz={24} fw={600}>
            Book Free Consultation
          </Text>
          <Divider c="#D7DEDD" my={15} />
          <form onSubmit={form.onSubmit(submitHandler)}>
            <TextInput
              label="Name"
              placeholder="Your name"
              key={form.key("name")}
              {...form.getInputProps("name")}
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
              key={form.key("phone")}
              {...form.getInputProps("phone")}
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              radius="md"
              my={20}
            />
            <Autocomplete
              classNames={{ label: classes.label, input: classes.input__root }}
              label="Select Disease"
              placeholder="Select"
              key={form.key("disease")}
              {...form.getInputProps("disease")}
              value={form.values.disease}
              onChange={(value) => form.setFieldValue("disease", value)}
              data={diseases}
              maxDropdownHeight={200}
            />
            <Button
              loading={isLoading}
              type="submit"
              radius="md"
              mt={20}
              mb={10}
              bg="#FF990C"
              fullWidth
            >
              Book
            </Button>
            {isSubmitted && (
              <Text c="dimmed" fz={12}>
                {" "}
                Thank You! We&apos;ll reach out to you
              </Text>
            )}
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default BookConsultation;
