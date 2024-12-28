import { Box, Flex, Image, Text } from "@mantine/core";
import { ReactNode } from "react";

export const AdsInfoBox = ({
  title,
  info,
  button,
  img,
  bg,
  pt = 20,
  pb = 0,
  type,
}: {
  title: ReactNode;
  info: string;
  button?: ReactNode;
  img: string;
  bg: string;
  pt?: number;
  pb?: number;
  type?: string;
}) => {
  const isLipoma = type === "lipoma";
  return (
    <Flex
      my={20}
      bg={bg}
      maw={823}
      direction={{
        base: isLipoma ? "column-reverse" : "row",
        sm: "row",
      }}
      justify="space-between"
      align="center"
      style={{
        borderRadius: 20,
      }}
      px={15}
      pt={pt}
      pb={pb}
    >
      <Box maw={383}>
        {title}
        <Text
          ta={{ base: "center", md: "left" }}
          fz={{ base: isLipoma ? 16 : 7, xs: 16 }}
          my={10}
        >
          {info}
        </Text>
        {button}
      </Box>
      <Image alt={info} src={img} h={{ base: 100, sm: 274 }} />
    </Flex>
  );
};
