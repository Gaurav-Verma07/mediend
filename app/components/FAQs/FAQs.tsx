"use client";
import { Accordion, Box, Image, rem, Title } from "@mantine/core";
import classes from "./FAQs.module.css";
import { useState } from "react";
import { faqs } from "./faqs";

const FAQs = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  console.log(activeItem);
  return (
    <Box my={100}>
      <Title className={classes.main__title}>Frequently Asked Questions</Title>
      <Box className={classes.accordion__main}>
        <Accordion
          variant="separated"
          value={activeItem}
          onChange={setActiveItem}
          chevron={
            <Image
              src="assets/blog_chevron.png"
              className={classes.chevron__icon}
              alt="chevron"
            />
          }
          classNames={{ item: classes.item, chevron: classes.chevron }}
        >
          {faqs.map((el, index: number) => (
            <Accordion.Item
              key={index}
              className={`${classes.item} ${
                activeItem === el.que ? classes.activeItem : ""
              }`}
              value={el.que}
            >
              <Accordion.Control c="#170F49">{el.que}</Accordion.Control>
              <Accordion.Panel c="#6F6C90">{el.ans}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};
export default FAQs;
