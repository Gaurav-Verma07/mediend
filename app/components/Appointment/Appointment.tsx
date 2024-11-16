import {
  Autocomplete,
  Box,
  Button,
  Image,
  Stepper,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "./Appointment.module.css";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { diseasesList } from "./diseaseList";
import { citylist } from "./citylist";
import { IconPhonePlus } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
const Appointment = () => {
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
    <Box className={classes.main}>
      {mobile && (
        <>
          {" "}
          <Box className={classes.main__content}>
            <Box>
              <Text fw={600}>Simplifying Surgery Experience</Text>
              <Text c="dimmed" fz={14}>
                Consult with our expert surgeon for more than 50+ diseases
              </Text>
            </Box>
            <Box className={classes.stepper__main} my={20}>
              <Text fz={14} mb={10} fw={600}>
                Next Steps
              </Text>
              <Stepper
                classNames={{
                  stepIcon: classes.stepIcon,
                  stepCompletedIcon: classes.stepCompletedIcon,
                  verticalSeparator: classes.verticalSeparator,
                }}
                active={4}
                onStepClick={setActive}
                orientation="vertical"
              >
                <Stepper.Step
                  completedIcon={
                    <Image
                      fit="contain"
                      className={classes.stepper_completed_icon}
                      src="https://img.pristyncare.com/static_pages%2FNewbookAppointmentForm%2FGroup%2010264.svg"
                      alt="call person"
                    />
                  }
                  fz={14}
                  description="Once you share your details, our care coordinator will get in touch with you."
                />
                <Stepper.Step
                  completedIcon={
                    <Image
                      fit="contain"
                      className={classes.stepper_completed_icon}
                      src="https://img.pristyncare.com/static_pages%2FNewbookAppointmentForm%2FGroup%2010263.svg"
                      alt="call person"
                    />
                  }
                  fz={14}
                  description="The coordinator will understand your symptoms and health condition in detail."
                />
                <Stepper.Step
                  completedIcon={
                    <Image
                      fit="contain"
                      className={classes.stepper_completed_icon}
                      src="https://img.pristyncare.com/static_pages%2FNewbookAppointmentForm%2FGroup%2010262.svg"
                      alt="call person"
                    />
                  }
                  fz={14}
                  description="Your consultation will be scheduled at the earliest."
                />
              </Stepper>
            </Box>
            <Box className={classes.stats__main}>
              <Box>
                <Text fw={600} fz={20}>
                  2M+
                </Text>
                <Text fz={14}>Happy Patients</Text>
              </Box>
              <Box>
                <Text fw={600} fz={20}>
                  150+
                </Text>
                <Text fz={14}>Clinics</Text>
              </Box>
              <Box>
                <Text fw={600} fz={20}>
                  45+
                </Text>
                <Text fz={14}>Cities</Text>
              </Box>
            </Box>
          </Box>
          <div className={classes.divider}></div>
        </>
      )}

      <Box className={classes.main__form}>
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
            my={20}
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
            my={20}
          />
          <Autocomplete
            classNames={{ label: classes.label, input: classes.input__input }}
            label="Select City"
            key={form.key("city")}
            {...form.getInputProps("city")}
            my={20}
            value={form.values.city}
            onChange={(value) => form.setFieldValue("city", value)}
            data={citylist}
            maxDropdownHeight={200}
          />
          <Autocomplete
            classNames={{ label: classes.label, input: classes.input__input }}
            label="Select Disease"
            my={20}
            key={form.key("disease")}
            {...form.getInputProps("disease")}
            value={form.values.disease}
            onChange={(value) => form.setFieldValue("disease", value)}
            maxDropdownHeight={200}
            data={diseasesList}
          />
          <Button
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
  );
};
export default Appointment;
