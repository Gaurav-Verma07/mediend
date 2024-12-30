"use client";
import {
  Grid,
  Box,
  Text,
  Paper,
  TextInput,
  Button,
  List,
  Stack,
  Flex,
} from "@mantine/core";
import { About } from "../../../lib/utils/adsDiseaseType";

import { Autocomplete, Divider } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { diseases } from "../BookConsultation/consultList";
import classes from "./AboutAds.module.css";

export const AdsConsultForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      disease: "",
    },
    validate: {
      disease: (val: string) => (val.length !== 0 ? null : "Select a disease"),
    },
  });
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(false);
      const formData = new FormData();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };
  return (
    <Box maw={390}>
      <Text fz={24} fw={600}>
        Book Free Consultation
      </Text>
      <Divider c="#D7DEDD" my={15} />
      <form onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          label="Patient  Name"
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
      </form>
    </Box>
  );
};

export const StickyForm = () => {
  return (
    <Paper
      visibleFrom="lg"
      h="fit-content"
      pos="sticky"
      top="20%"
      shadow="sm"
      p="md"
      maw={390}
    >
      <Text fz={24} fw={500}>
        Get Rid for Lipoma
      </Text>
      <Text fz={12} c="dimmed" mb="md">
        Speak to one of our representatives by filling the form below
      </Text>
      <TextInput
        classNames={{ label: classes.label, input: classes.input__root }}
        label="Patient Name"
        placeholder="Enter your name"
        mb="sm"
      />
      <TextInput
        classNames={{ label: classes.label, input: classes.input__root }}
        label="Mobile Number"
        placeholder="Enter your number"
        mb="sm"
      />
      <TextInput
        classNames={{ label: classes.label, input: classes.input__root }}
        label="City"
        placeholder="Noida"
        mb="sm"
      />
      <TextInput
        classNames={{ label: classes.label, input: classes.input__root }}
        label="Condition"
        placeholder="Lipoma"
        mb="sm"
      />
      <Button fullWidth>Request a call back</Button>
    </Paper>
  );
};

export const AboutAds = ({ data }: { data: About[] }) => {
  return (
    <Flex
      align="center"
      wrap="wrap"
      justify={{ base: "center", lg: "space-between" }}
      my={50}
    >
      <Stack style={{ position: "relative" }}>
        {data?.map(
          ({ que, ans }: { que: string; ans: string[] }, index: number) => (
            <Paper
              key={index}
              p="md"
              my={{ base: "md", sm: "xl" }}
              maw={529}
              bg="#E9F1FF"
              radius={15}
            >
              <Text fw={600} fz={{ base: 18, sm: 25 }}>
                {que}
              </Text>
              <List type="unordered" my={10} listStyleType="disc">
                {ans.map((el: string, index) => (
                  <List.Item fz={{ base: 10, xs: 16 }} my={5} key={index}>
                    {el}
                  </List.Item>
                ))}
              </List>
            </Paper>
          )
        )}
      </Stack>
    </Flex>
  );
};
