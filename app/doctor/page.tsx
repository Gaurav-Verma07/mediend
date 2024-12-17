"use client"
import { useState, useEffect } from 'react';
import { Image, Text, Group, Stack, Badge, Button, Title, Flex } from '@mantine/core';
import { Card } from "@mantine/core"
import { IconPhone, IconCalendarEvent, IconBrandWhatsapp, IconArrowRight, IconStar, IconStarFilled } from '@tabler/icons-react';
import sanityClient from '@sanity/client';
import { Doctor } from './[doctorName]/page';



const DoctorProfile = () => {
    const [pageData, setPageData] = useState<Doctor | null >(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    
    useEffect(() => {
      setIsLoading(true)
      fetch('https://7rljkuk3.apicdn.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27doctor%27%5D%7B%0A++title%2C%0A++speciality%2C%0A++degrees%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++yearsOfExperience%2C%0A++aboutDoctor%2C%0A++treatments%2C%0A++%22reviews%22%3A+reviews%5B%5D%7B%0A++++name%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++review%2C%0A++++highlight%0A++%7D%2C%0A++faqs%0A%7D%5B0%5D', {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setPageData(data.result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      });
    }, [])

  if (!pageData) return <div>Loading...</div>;

  return (
    <main>
        <div className=' bg-blue-200 h-40 text-center flex flex-col justify-center items-center'>
            <Title c={"blue"}>When you need answers, Best Doctors can help</Title>
            <Text size='xl' c={"dimmed"}> Find the care you need</Text>
        </div>
    <div className="shadow-xl rounded-lg overflow-hidden p-6 md:px-12 bg-slate-100 columns-2 gap-8 ">
       {
        [1,2,3,4,5,6].map((item,idx)=>{
            return (
                <Card key={idx} radius={"lg"} mb={"lg"} shadow="md">
                <div className="flex gap-4 justify-center items-center">
                  <div className="col-span-1">
                    <Image
                      src={pageData.imageUrl}
                      alt="Doctor"
                      radius="md"
                      fit="cover"
                      h={150}
                      w={150}
                    />
                  </div>
                  <div className="col-span-2 p-6">
                    <Group justify="apart" align="center">
                      <div>
                        <Flex gap={"sm"} align={"center"} >
                        <Text size="xl"  className='text-blue-700 '>{pageData.title}</Text>
                        <Badge c="blue" variant="light">4.7</Badge>
                        <IconStarFilled className='h-4 text-yellow-400'></IconStarFilled>
                        </Flex>
                        <Text size="sm" c="blue">{pageData.degrees}</Text>
                      </div>
                    </Group>
                    <Text size="sm" c="dark" mt={4}>{pageData.yearsOfExperience} Years Experience</Text>
                    <Text size="sm" c="dark" mt={4}>Mediend Care Clinic, Bangalore</Text>
                  </div>

                </div>
                <Stack my={16}>
                      <Group gap="sm">
                          <Text size="xs" p={"xs"}  c="blue" className='rounded-full bg-slate-200'>Laparoscopic Surgeon</Text>
                          <Text size="xs" p={"xs"}  c="blue" className='rounded-full bg-slate-200'>Proctologist</Text>
                          <Text size="xs" p={"xs"}  c="blue" className='rounded-full bg-slate-200'>General Surgeon</Text>
                      </Group>
                    </Stack>
                <div className="bg-gray-100 px-6 py-4">
                  <Group justify="apart">
                    <Button
                      variant="filled"
                      c="white"
                      leftSection={<IconCalendarEvent size={18} />}
                    >
                      Book Free Appointment
                    </Button>
                    <Group gap="md">
                      <Button
                        variant="outline"
                        c="blue"
                        leftSection={<IconBrandWhatsapp size={18} />}
                        rightSection={<IconArrowRight size={18} />}
                      >
                        Whatsapp Expert
                      </Button>
                    </Group>
                  </Group>
                </div>
                </Card>
                  
            )
        })
       } 

    </div>
    </main>
  );
};

export default DoctorProfile;