import { Box, Text, Title } from '@mantine/core';
import Image from 'next/image';
const data = [
  {
    img: "/assets/showcase/heart.png",
    value: 5000,
    name: "Successful Surgeries",
  },
  {
    img: "/assets/showcase/families.png",
    value: 10000,
    name: "Families Healed",
  },
  {
    img: "/assets/showcase/experts.png",
    value: 200,
    name: "Medical Experts",
  },
  {
    img: "/assets/showcase/awards.png",
    value: 10,
    name: "Awards & Accreditations",
  },
];

const Showcase = () => {
  return (
    <div className="my-20">
      <Title 
        className="text-center mb-12 text-[#1D3557] text-2xl md:text-4xl lg:text-5xl font-bold"
        data-aos="zoom-in-up"
      >
        Numbers that showcase our success
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 my-8">
        {data.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border"
          >
            <Image
<<<<<<< HEAD
              src={item.img}
              alt={item.name}
              width={64}
              height={64}
              className="mb-4"
=======
              mx="auto"
              fit="contain"
              src={el.img}
              w="77px"
              h="77px"
              alt="image"
              data-aos="zoom-out"
>>>>>>> 432a64de866dc6cba52a25a20b6c56697ca07d78
            />
            <Text className="text-[#1D3557] text-3xl font-semibold my-2">
              {item.value}+
            </Text>
            <Text className="text-[#1D3557] font-semibold text-center">
              {item.name}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;