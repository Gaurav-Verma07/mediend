"use client";
import { Box, Button, Group, Radio, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { sanity } from "../../../lib/sanity";
import classes from "../AboutAds/AboutAds.module.css";
export const AdsForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      mobile: " ",
      isInsurance: "no",
    },
    validate: {
      mobile: (val: string) => (val.length === 10 ? null : "Invalid number"),
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      console.log(form.values);
      await sanity.create({
        ...form.values,
        _type: "modalForm",
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
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
        />{" "}
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
        <Radio.Group
          mb="sm"
          key={form.key("isInsurance")}
          {...form.getInputProps("isInsurance")}
          onChange={(event) => form.setFieldValue("isInsurance", event)}
          name="isInsurance"
          label="Do you have insurance?"
        >
          <Group gap={10}>
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
        <Button loading={isLoading} fullWidth type="submit" bg="#FF990C">
          Submit
        </Button>
      </form>
    </Box>
  );
};
