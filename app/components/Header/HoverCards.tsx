import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Group,
  HoverCard,
  rem,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { theme } from "../../../theme";
import classes from "./Header.module.css";
import { tabs } from "./headerData";
const HoverCards = ({ data }: any) => {
  return (
    <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
      <HoverCard.Target>
        <a href="#" className={classes.link}>
          <Center inline>
            <Box component="span" mx={3} c="dimmed">
              {data.title}
            </Box>
            <IconChevronDown
              style={{ width: rem(16), height: rem(16) }}
              color={"grey"}
            />
          </Center>
        </a>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{ overflow: "hidden" }}>
        <Stack>
          {data.values.map((el: string, index: number) => (
            <a key={index} style={{ display: "inline" }}>
              {el}
            </a>
          ))}
        </Stack>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default HoverCards;
