"use client"
import {
  Autocomplete,
  Box,
  Button,
  Image,
  Stepper,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "../Appointment/Appointment.module.css";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { diseasesList } from "../Appointment/diseaseList";
import { citylist } from "../Appointment/citylist";
import { IconPhonePlus } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
const AppointmentForm = () => {
  const [active, setActive] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mobile = useMediaQuery(`(min-width: 1000px)`);
  console.log(process.env.NEXT_PUBLIC_APPOINTMENT_SHEET_ID);
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      disease: "",
      city: "",
    },
    validate: {
      name: (val: string) => (val.length !== 0 ? null : "Invalid name"),
      disease: (val: string) => (val.length !== 0 ? null : "Select a disease"),
      city: (val: string) => (val.length !== 0 ? null : "Select a city"),
    },
  });
  const form_id = `https://docs.google.com/forms/d/e/${process.env.NEXT_PUBLIC_APPOINTMENT_SHEET_ID}/formResponse?&submit=Submit`;

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(false);
      const formData = new FormData();
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_APPOINTMENT_SHEET_ENTRY_1}`,
        form.values.name
      ); // Replace with your field's entry ID
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_APPOINTMENT_SHEET_ENTRY_2}`,
        form.values.phone
      );
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_APPOINTMENT_SHEET_ENTRY_3}`,
        form.values.city
      );
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_APPOINTMENT_SHEET_ENTRY_4}`,
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
    <Box className="flex justify-center px-4 py-4 ">
      <Box className="flex-1">
        <form onSubmit={form.onSubmit(submitHandler)}>
          <TextInput
            label="Patient Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
            value={form.values.name}
            classNames={{ label: classes.label, input: classes.input__input }}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            radius="md"
            p={5}
            my={10}

          />
          <TextInput
            classNames={{ label: classes.label, input: classes.input__input }}
            // label="Phone No."
            label="Enter 10 digit mobile number"
            key={form.key("phone")}
            {...form.getInputProps("phone")}
            value={form.values.phone}
            onChange={(event) =>
              form.setFieldValue("phone", event.currentTarget.value)
            }
            radius="md"
            p={5}
            my={10}

          />
          <Autocomplete
            classNames={{ label: classes.label, input: classes.input__input }}
            label="Select City"
            key={form.key("city")}
            {...form.getInputProps("city")}
            my={10}
            value={form.values.city}
            onChange={(value) => form.setFieldValue("city", value)}
            data={citylist}
            maxDropdownHeight={200}

          />
          {/* <Autocomplete
            classNames={{ label: classes.label, input: classes.input__input }}
            label="Select Disease"
            my={10}
            key={form.key("disease")}
            {...form.getInputProps("disease")}
            value={form.values.disease}
            onChange={(value) => form.setFieldValue("disease", value)}
            maxDropdownHeight={200}
            data={diseasesList}
            
          /> */}
          <Button
            type="submit"
            radius="md"
            mt={20}
            bg="#3269DB"
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
  );
};
export default AppointmentForm;
