"use client"

import { Box, Tabs, ScrollArea, Grid, Image, Text, Button, Paper, Card } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';

const TabbedDiseaseList = () => {
  const [isShow, setIsShow] = useState(false);

  const departments = {
    "Top Surgeries": [
      { img: "/assets/mediend-icons/Cataract.svg", title: "Cataract" },
      { img: "/assets/mediend-icons/Lasik Eye Surgery.svg", title: "Lasik Eye Surgery" },
      { img: "/assets/mediend-icons/Gallstone.svg", title: "Gallstone" },
      { img: "/assets/mediend-icons/Piles.svg", title: "Piles" },
      { img: "/assets/mediend-icons/Appendectomy.svg", title: "Appendectomy" },
      { img: "/assets/mediend-icons/Liposuction.svg", title: "Liposuction" },
      { img: "/assets/mediend-icons/Kidney Stone.svg", title: "Kidney Stone" },
      { img: "/assets/mediend-icons/Hydrocelectomy.svg", title: "Hydrocelectomy" },
      { img: "/assets/mediend-icons/Laser Circumcision.svg", title: "Laser Circumcision" },
      { img: "/assets/mediend-icons/Breast Augmentation.svg", title: "Breast Augmentation" },
      { img: "/assets/mediend-icons/Breast Reduction.svg", title: "Breast Reduction" },
    ],
    "Ophthalmology": [
      { img: "/assets/mediend-icons/Cataract.svg", title: "Cataract" },
      { img: "/assets/mediend-icons/Lasik Eye Surgery.svg", title: "Lasik Eye Surgery" },
    ],
    "Proctology": [
      { img: "/assets/mediend-icons/Piles.svg", title: "Piles" },
      { img: "/assets/mediend-icons/Anal Fissure.svg", title: "Anal Fissure" },
      { img: "/assets/mediend-icons/Anal Fitsula.svg", title: "Anal Fistula" },
      { img: "/assets/mediend-icons/Pilonidal Sinus.svg", title: "Pilonidal Sinus" },
    ],
    "ENT": [
      { img: "/assets/mediend-icons/Tonsillectomy.svg", title: "Tonsillectomy" },
      { img: "/assets/mediend-icons/Septoplasty.svg", title: "Septoplasty" },
      { img: "/assets/mediend-icons/FESS.svg", title: "FESS" },
      { img: "/assets/mediend-icons/Adenoidectomy.svg", title: "Adenoidectomy" },
      { img: "/assets/mediend-icons/Mastoidectomy.svg", title: "Mastoidectomy" },
      { img: "/assets/mediend-icons/Tympanoplasty.svg", title: "Tympanoplasty" },
    ],
    "Orthopedics": [
      { img: "/assets/mediend-icons/Meniscus Tear.svg", title: "Meniscus Tear" },
      { img: "/assets/mediend-icons/ACL Tear.svg", title: "ACL Tear" },
      { img: "/assets/mediend-icons/Shoulder Disclocation.svg", title: "Shoulder Dislocation" },
      { img: "/assets/mediend-icons/Shoulder Replacement.svg", title: "Shoulder Replacement" },
      { img: "/assets/mediend-icons/Spine Surgery.svg", title: "Spine Surgery" },
    ],
    "Vascular": [
      { img: "/assets/mediend-icons/Deep Vain Thrombosis.svg", title: "Deep Vein Thrombosis" },
      { img: "/assets/mediend-icons/Vericose Veins.svg", title: "Varicose Veins" },
      { img: "/assets/mediend-icons/Vericocele.svg", title: "Varicocele" },
    ],
    "Gynecology": [
      { img: "/assets/mediend-icons/Hysterectomy.svg", title: "Hysterectomy" },
      { img: "/assets/mediend-icons/Endometriosis.svg", title: "Endometriosis" },
      { img: "/assets/mediend-icons/Uterine Fibroid.svg", title: "Uterine Fibroid" },
      { img: "/assets/mediend-icons/Ectopic Pregnancy.svg", title: "Ectopic Pregnancy" },
      { img: "/assets/mediend-icons/Vaginoplasty.svg", title: "Vaginoplasty" },
      { img: "/assets/mediend-icons/Hymenoplasty.svg", title: "Hymenoplasty" },
      { img: "/assets/mediend-icons/Labiaplasty.svg", title: "Labiaplasty" },
    ],
    "Fertility": [
      { img: "/assets/mediend-icons/IUI.svg", title: "IUI" },
      { img: "/assets/mediend-icons/IVF.svg", title: "IVF" },
      { img: "/assets/mediend-icons/MTP.svg", title: "Medical Termination of Pregnancy (MTP)" },
    ],
    "Urology": [
      { img: "/assets/mediend-icons/Kidney Stone.svg", title: "Kidney Stone" },
      { img: "/assets/mediend-icons/Hydrocelectomy.svg", title: "Hydrocelectomy" },
      { img: "/assets/mediend-icons/Laser Circumcision.svg", title: "Laser Circumcision" },
      { img: "/assets/mediend-icons/ZSR Circumcision.svg", title: "ZSR Circumcision" },
      { img: "/assets/mediend-icons/Umbilical Hernia.svg", title: "Umbilical Hernia" },
      { img: "/assets/mediend-icons/Ingunial Hernia.svg", title: "Inguinal Hernia" },
    ],
    "Aesthetics": [
      { img: "/assets/mediend-icons/Breast Augmentation.svg", title: "Breast Augmentation" },
      { img: "/assets/mediend-icons/Breast Reduction.svg", title: "Breast Reduction" },
      { img: "/assets/mediend-icons/Breast Lift.svg", title: "Breast Lift" },
      { img: "/assets/mediend-icons/Gynecomastia.svg", title: "Gynecomastia" },
      { img: "/assets/mediend-icons/Rhinoplasty.svg", title: "Rhinoplasty" },
    ],
    "Others": [
      { img: "/assets/mediend-icons/Thyroidectomy.svg", title: "Thyroidectomy" },
      { img: "/assets/mediend-icons/Diabetic Foot Ulcer.svg", title: "Diabetic Foot Ulcer" },
      { img: "/assets/mediend-icons/Sebaceous Cyst.svg", title: "Sebaceous Cyst" },
      { img: "/assets/mediend-icons/Lipoma.svg", title: "Lipoma" },
    ],
  };
  

  return (
    <Box className='flex flex-col justify-center items-center w-full'>
    <Card p={"sm"} className='w-[100%]'>
      <Tabs defaultValue="Top Surgeries" variant="outline">
        <div style={{ position: 'relative' }} className='flex justify-center items-center flex-col'>
          <ScrollArea.Autosize type="scroll" scrollbarSize={1}  w={"100%"}>
            <Tabs.List mb="xl" mt="sm" style={{ flexWrap: 'nowrap', minWidth: 'max-content' }}>
              {Object.keys(departments).map((dept) => (
                <Tabs.Tab
                  key={dept}
                  value={dept}
                  styles={{
                    tab: {
                      padding: '8px 16px',
                      whiteSpace: 'nowrap',
                      '&[data-active]': {
                        backgroundColor: '#1a365d',
                        color: 'white',
                     },
                    },
                  }}
                >
                  <Text size="md">
                  {dept}
                  </Text>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </ScrollArea.Autosize>
        </div>
          <Card py={"lg"} shadow='lg' className='border'>
        {Object.entries(departments).map(([dept, conditions]) => (
          <Tabs.Panel key={dept} value={dept}>
            <Grid gutter={"md"}>
              {conditions.map((condition, index) => (
                <Grid.Col key={index} span={{ base: 6, md: 3, lg: 2 }}>
                  <Paper
                    p="md"
                    radius="md"
                    withBorder
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      height:'100%',
                    }}
                    data-aos="zoom-in"
                  >
                    
                      <Image
                        src={condition.img}
                        alt={condition.title}
                        w={60}
                        h={60}
                        fit="cover"
                      />

                    <Text fz="sm" fw={500} ta="center">
                      {condition.title}
                    </Text>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
            
           
          </Tabs.Panel>
        ))}
        </Card>
      </Tabs>
      </Card>
    </Box>
  );
};

export default TabbedDiseaseList;