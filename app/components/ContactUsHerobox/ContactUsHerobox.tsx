import Link from 'next/link';
import { Container, Flex, Image, Text, Title } from '@mantine/core';

const ContactUsHerobox = () => {
  return (
    <Container size="lg" my={50} px={20}>
      <Flex wrap="wrap" justify="space-between">
        <Flex direction="column" maw={460} mb={20}>
          <Title c="#333333" fw={400} fz={{ base: 28, sm: 35 }}>
            DISCOVER US
          </Title>
          <Text c="#333333" my={20}>
            Mediend is here to help you:
            <br />
            Our experts are available to answer any questions you might have. We’ve got the answers.
          </Text>
          <Title c="#333333" fz={{ base: 20, sm: 26 }} fw={300}>
            Visit Us
          </Title>
          <Text c="#333333" td="underline">
            H-166, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh 201301
          </Text>
          <Text c="#333333" my={20}>
            Feel free to get in touch with us through our channels:
          </Text>
          <Title c="#333333" fz={{ base: 20, sm: 26 }} fw={400}>
            Email US
          </Title>
          <Text c="#333333" component={Link} href="mailto:info@mediend.com" my={10}>
            mediendofficials@gmail.com
          </Text>
          <Title c="#333333" fz={{ base: 20, sm: 26 }} fw={400}>
            Call US
          </Title>
          <Text c="#333333" component={Link} href="tel:+918750300099" my={10}>
            +91 7042833800
          </Text>
        </Flex>
        <Image src="/assets/contact__us.png" w={{ base: '--webkit-fill-available', sm: 600 }} />
      </Flex>
    </Container>
  );
};
export default ContactUsHerobox;
