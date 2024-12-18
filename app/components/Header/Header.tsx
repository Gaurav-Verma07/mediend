"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import Image from 'next/image';
import Logo from '../../../public/logo.png'
import {tabs} from "./headerData"
import { Button, Input, Modal, TextInput } from '@mantine/core';
import Appointment from '../Appointment/Appointment';
import { useDisclosure } from '@mantine/hooks';
import classes from "./Header.module.css";

const MedicalServicesNavigation = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <>
    <nav className="w-full bg-white shadow-md py-2">
      <div className='container flex justify-between items-center px-4 lg:px-8'>
          <Image src={Logo} alt='logo'></Image>
          <div className='flex gap-4 justify-center items-center'>
            <TextInput placeholder="Search..." variant="filled" leftSection={<IconSearch/>}></TextInput>
            <Button onClick={modalOpen}> Book Free Consultation </Button>
          </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {tabs.map((tab, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setActiveTab(index)}
              onMouseLeave={() => setActiveTab(null)}
            >
              <button 
                className="px-2 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 flex items-center"
              >
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
                        href={link.link || '#'}
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