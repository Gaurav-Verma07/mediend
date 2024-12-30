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
import { sanity } from "../../../lib/sanity";

export const AdsConsultForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      mobile: "",
    },
    validate: {
      mobile: (val: string) => (val.length === 10 ? null : "Invalid number"),
    },
  });
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      await sanity.create({
        ...form.values,
        _type: "consultForm",
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
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
          label="Mobile No."
          leftSection={<Text>+91</Text>}
          placeholder="111222333"
          key={form.key("mobile")}
          {...form.getInputProps("mobile")}
          value={form.values.mobile}
          onChange={(event) =>
            form.setFieldValue("mobile", event.currentTarget.value)
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
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      mobile: " ",
      city: " ",
      condition: "",
    },
    validate: {
      mobile: (val: string) => (val.length === 10 ? null : "Invalid number"),
      condition: (val: string) =>
        val.length !== 0 ? null : "Enter a condition",
    },
  });
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      console.log(form.values);
      await sanity.create({
        ...form.values,
        _type: "callBackForm",
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper
      visibleFrom="lg"
      h="fit-content"
      pos="sticky"
      top="20%"
      shadow="lg"
      p="md"
      maw={390}
    >
      <Text fz={24} fw={600}>
        Get Rid for Lipoma
      </Text>
      <Text fz={12} c="dimmed" mb="md">
        Speak to one of our representatives by filling the form below
      </Text>
      <form onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          classNames={{ label: classes.label, input: classes.input__root }}
          label="Patient Name"
          placeholder="Enter your name"
          mb="sm"
          key={form.key("name")}
          {...form.getInputProps("name")}
          onChange={(event) =>
            form.setFieldValue("name", event.currentTarget.value)
          }
        />
        <TextInput
          classNames={{ label: classes.label, input: classes.input__root }}
          label="Mobile Number"
          placeholder="Enter your number"
          leftSection={<Text>+91</Text>}
          mb="sm"
          key={form.key("mobile")}
          {...form.getInputProps("mobile")}
          onChange={(event) =>
            form.setFieldValue("mobile", event.currentTarget.value)
          }
        />
        <TextInput
          classNames={{ label: classes.label, input: classes.input__root }}
          label="City"
          placeholder="Noida"
          mb="sm"
          key={form.key("city")}
          {...form.getInputProps("city")}
          onChange={(event) =>
            form.setFieldValue("city", event.currentTarget.value)
          }
        />
        <TextInput
          classNames={{ label: classes.label, input: classes.input__root }}
          label="Condition"
          mb="sm"
          key={form.key("condition")}
          {...form.getInputProps("condition")}
          onChange={(event) =>
            form.setFieldValue("condition", event.currentTarget.value)
          }
        />
        <Button loading={isLoading} fullWidth type="submit" bg="#FF990C">
          Request a call back
        </Button>
      </form>
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
