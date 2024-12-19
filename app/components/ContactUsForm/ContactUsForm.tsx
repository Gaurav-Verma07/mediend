import { Box, Button, Flex, Group, Select, Text, Textarea, TextInput, Title } from '@mantine/core';
import { indianStates } from './states';
import classes from './COntactUsForm.module.css';

const ContactUsForm = () => {
  return (
    <Flex wrap="wrap" bg="#1A191A" p={20} justify="space-around" align="center">
      <Box maw={345} c="#fff" my={20}>
        <Title fz={{ base: 30, sm: 48 }}>Have a Query? Let’s discuss</Title>
        <Text>
          Thank you for getting in touch! Kindly.
          <br />
          Fill the form, have a great day!
        </Text>
      </Box>
      <Box>
        <form>
          <Group wrap="wrap" my={20} grow>
            <TextInput
              classNames={{ label: classes.label, input: classes.input }}
              label="Name"
              placeholder="name goes here"
            />
            <TextInput
              classNames={{ label: classes.label, input: classes.input }}
              type="email"
              label="Email"
              placeholder="email goes here"
            />
          </Group>
          <Group wrap="wrap" my={20} grow>
            <TextInput
              classNames={{ label: classes.label, input: classes.input }}
              label="Phone Number"
              placeholder="name goes here"
            />
            <Select
              data={indianStates}
              classNames={{ label: classes.label, input: classes.input }}
              type="email"
              label="Select State"
              placeholder="email goes here"
            />
          </Group>
          <Textarea
            classNames={{ label: classes.label, input: classes.input }}
            my={20}
            label="Message"
          />
          <Button color="#f24b04" my={20}>
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
export default ContactUsForm;
