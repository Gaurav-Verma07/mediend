import {
  ActionIcon,
  Anchor,
  BackgroundImage,
  Box,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconBrandWhatsappFilled,
} from "@tabler/icons-react";
import Link from "next/link";

interface CardProp {
  image: string;
  name: string;
  title: string;
  social: {
    google: string;
    facebook: string;
    whatsapp: string;
  };
}

const TeamCard = ({ data }: { data: CardProp }) => {
  return (
    <BackgroundImage
      pos="relative"
      w={{ base: "100%", sm: 300, lg: 350 }}
      h={{ base: 350, sm: 300, lg: 400 }}
      src={data.image}
      radius={20}
    >
      <Box
        pos="absolute"
        bottom={20}
        bg="#fff"
        w="90%"
        px={10}
        py={15}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: 25,
        }}
      >
        <Text c="#2967B0" fz={{ base: 20, sm: 26 }} fw={400}>
          {data.name}
        </Text>
        <Flex justify="space-between">
          <Text c="#2967B0">{data.title}</Text>
          <div className="line"></div>
          <Group>
            <Anchor href={data.social.google}>
              <IconBrandGoogleFilled color="#2967B0" />
            </Anchor>
            <Anchor href={data.social.facebook}>
              <IconBrandFacebookFilled color="#2967B0" />
            </Anchor>
            <Anchor href={data.social.whatsapp}>
              <IconBrandWhatsappFilled color="#2967B0" />
            </Anchor>
          </Group>
        </Flex>
      </Box>
    </BackgroundImage>
  );
};
export default TeamCard;
