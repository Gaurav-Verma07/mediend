"use client";
import { Box, Table, Text, Title } from "@mantine/core";
const categories = [
  {
    name: "Incision Size",
    traditional: "5-7 CM",
    minimallyInvasive: "1-2 CM",
  },
  {
    name: "Scars",
    traditional: "BIG SCARS",
    minimallyInvasive: "SMALL SCARS",
  },
  {
    name: "Success Rate",
    traditional: "LOW",
    minimallyInvasive: "HIGH",
  },
  {
    name: "Recovery Time",
    traditional: "1 MONTH",
    minimallyInvasive: "1 WEEK",
  },
  {
    name: "Blood Loss",
    traditional: "HEAVY",
    minimallyInvasive: "MINIMAL",
  },
  {
    name: "Skin Tightening",
    traditional: "NON UNIFORM",
    minimallyInvasive: "UNIFORM",
  },
  {
    name: "Anesthesia Required",
    traditional: "GENERAL",
    minimallyInvasive: "LOCAL",
  },
  {
    name: "Pain",
    traditional: "PAINFUL",
    minimallyInvasive: "MINIMAL",
  },
];

export const Procedure = () => {
  return (
    <Box maw={810} my={80}>
      <Title fz={{ base: 23, sm: 36 }} mb={10}>
        Why opt for Minimally Invasive Lipoma Procedure?
      </Title>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th fz={{ base: 9, sm: 20 }} ta="center">
              Traditional
            </Table.Th>
            <Table.Th fz={{ base: 9, sm: 20 }} c="#3269DB" ta="center">
              Minimally Invasive
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {categories.map((el, index) => (
            <Table.Tr key={index} my={10} bg="#EEF0F5">
              <Table.Td fz={{ base: 8, sm: 14 }} fw={600}>
                {el.name}
              </Table.Td>
              <Table.Td>
                <Text
                  fz={{ base: 10, sm: 16 }}
                  fw={500}
                  bg="#fff"
                  p={10}
                  ta="center"
                  style={{ borderRadius: 20 }}
                >
                  {el.traditional}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text
                  fz={{ base: 10, sm: 16 }}
                  fw={500}
                  bg="#3269DB"
                  p={10}
                  ta="center"
                  c="#fff"
                  style={{ borderRadius: 20 }}
                >
                  {el.minimallyInvasive}
                </Text>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  );
};
