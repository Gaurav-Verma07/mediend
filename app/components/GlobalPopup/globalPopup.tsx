"use client"


// components/GlobalPopup/GlobalPopup.tsx
import { Box, Center, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";

import { useEffect, useState } from "react";
import classes from "../Header/Header.module.css";
import Appointment from "../Appointment/Appointment";

interface GlobalPopupProps {
  scrollThreshold?: number;
  intervalTime?: number;
  useInterval?: boolean;
}

const GlobalPopup = ({ 
  scrollThreshold = 300,
  intervalTime = 30000,
  useInterval = false 
}: GlobalPopupProps) => {
  const isMobile8 = useMediaQuery(`(min-width: 800px)`);
  const [opened, { open, close }] = useDisclosure(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was recently closed
    const lastClosed = localStorage.getItem('popupLastClosed');
    const cooldownPeriod = 24 * 60 * 60 * 1000; // 24 hours
    
    if (lastClosed && Date.now() - parseInt(lastClosed) < cooldownPeriod) {
      return;
    }

    if (useInterval) {
      const intervalId = setInterval(() => {
        open();
      }, intervalTime);

      return () => clearInterval(intervalId);
    } else {
      const handleScroll = () => {
        if (!hasShown && window.scrollY > scrollThreshold) {
          open();
          setHasShown(true);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [useInterval, intervalTime, scrollThreshold, hasShown, open]);

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