"use client"
import { Box, Center, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure, useInterval, useMediaQuery } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import classes from "../Header/Header.module.css";
import Appointment from "../Appointment/Appointment";
import { usePathname } from "next/navigation";

interface GlobalPopupProps {
  scrollThreshold?: number;
  intervalTime?: number;
}

const GlobalPopup = ({
  scrollThreshold = 300,
  intervalTime = 120000, // 2 mins
}: GlobalPopupProps) => {
  const isMobile8 = useMediaQuery(`(min-width: 800px)`);
  const [opened, { open, close }] = useDisclosure(false);
  const path = usePathname();

  // Use interval hook for periodic popup
  const interval = useInterval(() => {
    open();
  }, intervalTime);

  useEffect(() => {
    // Start the interval
    interval.start();
    return interval.stop;
  }, []);

  // Effect for page change popup
  useEffect(() => {
    const lastClosed = localStorage.getItem('popupLastClosed');
    const cooldownPeriod = 24 * 60 * 60 * 1000; // 24 hours


      // Small delay to ensure smooth transition
      const timeoutId = setTimeout(() => {
        open();
      }, 10000);

      return () => clearTimeout(timeoutId);
    
  }, [path]); // Trigger on path change

  const handleClose = () => {
    close();
    localStorage.setItem('popupLastClosed', Date.now().toString());
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      fullScreen={isMobile8 ? false : true}
      radius={isMobile8 ? "lg" : 0}
      classNames={{
        content: classes.modal__content,
        header: classes.modal__header,
        title: classes.modal__title,
        close: classes.modal__close,
      }}
      title="Book Your FREE Consultation Now"
    >
      <Appointment />
    </Modal>
  );
};

export default GlobalPopup;