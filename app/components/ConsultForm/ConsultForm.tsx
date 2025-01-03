"use client";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { diseases } from "../BookConsultation/consultList";
import classes from "./ConsultForm.module.css";
export const ConsultForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  );
};
