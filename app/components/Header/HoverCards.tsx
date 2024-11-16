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
  console.log({ data });
  return (
    <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
      <HoverCard.Target>
        <a href="#" className={classes.link}>
          <Center inline>
            <Box component="span" mx={3}>
              {data.label}
            </Box>
          </Center>
        </a>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{ overflow: "hidden" }}>
        <Stack>
          {data.links.map(
            (el: { label: string; link: string }, index: number) => (
              <a key={index} style={{ display: "inline" }}>
                {el.label}
              </a>
            )
          )}
        </Stack>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default HoverCards;
