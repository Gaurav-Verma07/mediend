import { useState, useEffect } from 'react';
import { Card, Group, Stack, Title, Text, Button } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconBriefcase, IconThumbUp } from '@tabler/icons-react';
import Link from 'next/link';
import { Doctor } from '../../../doctor/[doctorName]/page';

const DoctorCarousel = ({ data }:{data:Doctor[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create array with duplicated items for smooth infinite scroll
  const extendedData = [...data, ...data, ...data];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // Reset to the middle set of items when reaching the end
    if (currentSlide >= data.length) {
      setCurrentSlide(currentSlide % data.length);
    }
    // Reset to the middle set of items when reaching the beginning
    if (currentSlide < 0) {
      setCurrentSlide(data.length + (currentSlide % data.length));
    }
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentSlide(current => current - 1);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentSlide(current => current + 1);
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button 
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
        aria-label="Previous slide"
      >
        <IconChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
        aria-label="Next slide"
      >
        <IconChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(calc(-${(currentSlide + data.length) * 90}% - ${(currentSlide + data.length) * 10}px))`,
          gap: '10px'
        }}
        onTransitionEnd={handleTransitionEnd}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {extendedData.map((doctor, idx) => (
          <div
            key={idx}
            className="w-[75%] flex-shrink-0"
          >
            <Link href={`/doctor/${doctor.slug}`}>
              <Card className="h-full">
                <Group className="gap-4">
                  <div className="h-32 w-32 relative overflow-hidden rounded-lg">
                    <img
                      src={doctor.imageUrl}
                      alt={doctor.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <Stack className="flex-1 gap-4">
                    <div>
                      <Title className="text-lg font-semibold text-blue-600">
                        {doctor.title}
                      </Title>
                      <Text className="text-sm text-gray-500">
                        {doctor.degrees}
                      </Text>
                      <Text className="text-sm text-gray-500">
                        {doctor.speciality}
                      </Text>
                    </div>
                    <Group className="gap-6">
                      <div>
                        <Group className="gap-2">
                          <IconBriefcase className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-600">
                            {doctor.yearsOfExperience}
                          </span>
                        </Group>
                        <Text className="text-xs text-gray-500">
                          Experience
                        </Text>
                      </div>
                      <div className="h-8 w-px bg-gray-200" />
                      <div>
                        <Group className="gap-2">
                          <IconThumbUp className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-600">
                            99%
                          </span>
                        </Group>
                        <Text className="text-xs text-gray-500">
                          Recommended
                        </Text>
                      </div>
                    </Group>
                  </Stack>
                </Group>
                <Button className="mt-4 w-full" variant="outline">
                  Book Appointment
                </Button>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCarousel;