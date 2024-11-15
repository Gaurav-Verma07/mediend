import { Box, Image, rem, Text, Title } from "@mantine/core";
import classes from "./Showcase.module.css";
const data = [
  {
    img: "/assets/heart.png",
    value: 5000,
    name: "Successful Surgeries",
  },
  {
    img: "/assets/heart.png",
    value: 10000,
    name: "Families Healed",
  },
  {
    img: "/assets/heart.png",
    value: 200,
    name: "Medical Experts",
  },
  {
    img: "/assets/heart.png",
    value: 10,
    name: "Awards & Accreditations",
  },
];
const Showcase = () => {
  return (
    <Box my={80} className={classes.main}>
      <Title className={classes.heading}>
        Numbers that showcase our success
      </Title>
      <Box className={classes.mainBox}>
        {data.map((el, index: number) => (
          <Box className={classes.box} key={index}>
            <Image
              fit="contain"
              src={el.img}
              height={77}
              width={77}
              alt="image"
            />
            <Text c="#1D3557" fz={32} fw={600} my={10}>
              {el.value} +
            </Text>
            <Text c="#1D3557" fw={600}>
              {el.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Showcase;
