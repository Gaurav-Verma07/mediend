import { Box, Badge, Flex, Title, Text, ActionIcon } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconBrandWhatsappFilled,
} from "@tabler/icons-react";

const OurFounder = () => {
  return (
    <Flex
      justify={{ base: "center", lg: "space-between" }}
      //   align={{ base: "center", sm: "flex-start" }}
      //   align="center"
      wrap="wrap"
      my={40}
      mx={10}
    >
      <Box maw={545} my={20}>
        <Badge size="xl" color="rgba(26, 91, 238, 0.1)" c="#2967B0">
          Our Founder
        </Badge>
        <Title fz={{ base: 24, sm: 48 }} my={20} c="#2967B0">
          Dr. Amit Jain
        </Title>
        <Text fz={{ base: 16, sm: 18 }}>
          At Landing Page Doctor, we are dedicated to delivering exceptional
          medical care and improving the health and well-being of our patients.
          Our mission is to provide comprehensive and personalized healthcare
          services, while our vision is to be the leading clinic in promoting
          wellness and preventive care. We are guided by our core values of
          compassion, integrity, and excellence.
        </Text>
      </Box>
      <Box>
        <Box
          w={{ base: "90vw", sm: 530 }}
          h={{ base: 350, sm: 530 }}
          style={{
            backgroundImage: "url(/assets/getintouch.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            borderRadius: 25,
          }}
        >
          <Flex
            maw={200}
            justify="space-between"
            bg="#fff"
            style={{
              borderRadius: 25,
              position: "absolute",
              bottom: 10,
              left: 10,
            }}
            px={30}
            py={10}
          >
            <ActionIcon variant="transparent" size="xl">
              <IconBrandGoogleFilled
                style={{ width: "70%", height: "70%" }}
                color="#2967B0"
              />
            </ActionIcon>
            <ActionIcon variant="transparent" size="xl">
              <IconBrandFacebookFilled
                style={{ width: "70%", height: "70%" }}
                color="#2967B0"
              />
            </ActionIcon>
            <ActionIcon variant="transparent" size="xl">
              <IconBrandWhatsappFilled
                style={{ width: "70%", height: "70%" }}
                color="#2967B0"
              />
            </ActionIcon>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
export default OurFounder;
