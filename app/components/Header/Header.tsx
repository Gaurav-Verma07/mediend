"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  IconChevronDown,
  IconSearch,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { tabs } from "./headerData";
import { Box, Button, Modal, TextInput } from "@mantine/core";
import Appointment from "../Appointment/Appointment";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

const MedicalServicesNavigation = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveTab(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveTab(null);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md py-2">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-4 py-2">
          <Box component={Link} href="/">
            <Image
              style={{ cursor: "pointer" }}
              src={Logo}
              alt="logo"
              height={40}
              width={100}
            />
          </Box>
          <div className="flex items-center gap-3">
            <TextInput
              placeholder="Search..."
              variant="filled"
              leftSection={<IconSearch />}
              className="w-full max-w-[200px]"
            />
            <button onClick={toggleMobileMenu} className="p-2">
              {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex container justify-between items-center px-4 md:px-8">
          <div className="flex justify-between items-center w-full">
            <Box component={Link} href="/">
              <Image
                style={{ cursor: "pointer" }}
                src={Logo}
                alt="logo"
                height={40}
                width={100}
              />
            </Box>
            <div className="flex gap-4 justify-center items-center">
              <TextInput
                placeholder="Search..."
                variant="filled"
                leftSection={<IconSearch />}
                className="w-[250px]"
              />
              <Button onClick={modalOpen}> Book Free Consultation </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-20 left-0 w-full z-50 shadow-lg">
            {tabs.map((tab, index) => (
              <div key={index} className="border-b">
                <button
                  onClick={() =>
                    setActiveTab(activeTab === index ? null : index)
                  }
                  className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-100"
                >
                  {tab.label}
                  {tab.links.length > 0 && (
                    <IconChevronDown
                      className={`ml-2 h-5 w-5 transform transition-transform ${
                        activeTab === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {tab.links.length > 0 && activeTab === index && (
                  <div className="bg-gray-50 px-4">
                    {tab.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.link || "#"}
                        className="block py-2 text-gray-700 hover:text-blue-600"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <Button
                onClick={() => {
                  modalOpen();
                  closeMobileMenu();
                }}
                className="w-full"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:block container mx-auto px-4 md:px-8">
          <div className="flex flex-row justify-center items-center">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveTab(index)}
                onMouseLeave={() => setActiveTab(null)}
              >
                <button className="p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 flex items-center text-sm">
                  {tab.label}
                  {tab.links.length > 0 && (
                    <IconChevronDown className="ml-2 h-4 w-4" />
                  )}
                </button>

                {tab.links.length > 0 && activeTab === index && (
                  <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-0 bg-white shadow-lg border rounded-md min-w-[250px] max-w-[calc(100vw-2rem)]">
                    <div className="py-2">
                      {tab.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.link || "#"}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <Modal
        size={"55em"}
        classNames={{
          content: classes.modal__content,
          header: classes.modal__header,
          title: classes.modal__title,
          close: classes.modal__close,
        }}
        opened={modalOpened}
        onClose={modalClose}
        radius="lg"
        title="Book Your FREE Consultation Now"
      >
        <Appointment />
      </Modal>
    </>
  );
};

export default MedicalServicesNavigation;
