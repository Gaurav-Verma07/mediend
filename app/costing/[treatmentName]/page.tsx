"use client";
import { Text, Container, Stack, Tabs } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import {
  IconBrandWhatsapp,
  IconBriefcase,
  IconTarget,
  IconThumbUp,
} from "@tabler/icons-react";
import StatCard from "../../components/StatsCard/statsCard";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Stories from "../../components/Stories/Stories";
import Specialities from "../../components/Specialities/Specialities";
import { useParams } from "next/navigation";
import LoadingScreen from "../../components/Loading/loading";
import { sanity } from "../../../lib/sanity";

import {
    IconBone,
    IconBrain,
    IconClipboard,
    IconClock,
    IconDental,
    IconHeart,
    IconHeartbeat,

    IconToolsKitchen3,
    IconUser,
    IconUserCircle,
  } from "@tabler/icons-react";



type Slug = {
  _type: "slug";
  current: string;
};
export interface Specialities{
  title: string;
  iconUrl:string;
  description:string;
}
export interface Treatment {
  _id: string;
  _type: "treatment";
  title: string;
  slug: Slug;
  location: string;
  startingCost: number;
  cost: {
    leastCost: number;
    averageCost: number;
    highestCost: number;
  };
  procedureType?: string;
  anaesthetiaType?: string;
  hospitalDays?: string;
  procedureDuration?: string;
  risk?: string;
  aboutTreatment?: Block[];
  doctors?: Doctor[];
  additionalContent1?: Block[];
  additionalContent2?: Block[];
  specialties?: [];
  reviews?: Review[];
  faqs?: FAQ[];
}

export interface Doctor {
  _type: "doctor";
  imgUrl: Image;
  name: string;
  specialty: string;
  additionalInfo?: string;
  experience?: number;
  recommended?: number;
}


export interface Review {
  _type: "review";
  name: string;
  image?: Image;
  review: string;
  highlight?: string;
}

export interface FAQ {
  _type: "faq";
  question: string;
  answer: string;
}

export interface Block {
  _type: "block";
  children: { text: string }[];
  style?: string;
  markDefs?: any[];
}

export interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

const CostingPage = () => {
  const [activeTab, setActiveTab] = useState<string | null>("overview");
  const params = useParams<{ treatmentName: string | undefined }>();
  const { treatmentName } = params;

  const [pageData, setPageData] = useState<Treatment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)



  useEffect(() => {
    setIsLoading(true)
    fetch('https://7rljkuk3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22costing%22+%26%26+slug.current+%3D%3D+%22lasik%22+%26%26+location+%3D%3D+%22Hyderabad%22%5D%5B0%5D%7B%0A++++++++++_id%2C%0A++++++++++_type%2C%0A++++++++++title%2C%0A++++++++++slug%2C%0A++++++++++location%2C%0A++++++++++startingCost%2C%0A++++++++++cost%2C%0A++++++++++procedureType%2C%0A++++++++++anaesthetiaType%2C%0A++++++++++hospitalDays%2C%0A++++++++++procedureDuration%2C%0A++++++++++risk%2C%0A++++++++++aboutTreatment%2C%0A++++++++++additionalContent1%2C%0A++++++++++additionalContent2%2C%0A++++++++++additionalContent3%2C%0A++++++++++additionalContent4%2C%0A++++++++++doctors%5B%5D-%3E%7B%0A++++title%2C%0A++++%22image%22%3Aimage.asset-%3Eurl%2C%0A++++degrees%2C%0A++++speciality%2C%0A++++yearsOfExperience%2C%0A++++%22slug%22%3Aslug.current%0A++++%0A++%7D%2C%0A++++++++++specialties%2C%0A++++++++++reviews%2C%0A++++++++++faqs%0A++++++++%7D', {
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
  }, [treatmentName])

  const getStatsData = (costData: Treatment['cost']) => [
    {
      title: `₹${costData.leastCost}`,
      description: "Lowest Approx",
      icon: <IconHeart size={20} />,
      bgColor: "#F4F7FB",
      color: "#0069f6",
    },
    {
      title: `₹${costData.averageCost}`,
      description: "Avg. Approx",
      icon: <IconClock size={20} />,
      bgColor: "#fff8f0",
      color: "#ff8a04",
    },
    {
      title: `₹${costData.highestCost}`,
      description: "Highest Approx",
      icon: <IconTarget size={20} />,
      bgColor: "#dcffe5",
      color: "#49b365",
    },
  ];



  if (isLoading) return <LoadingScreen />;
  if (!pageData) return <div>Please check your connection</div>;

  return (
    <>
      <div className="grid grid-cols-10 bg-zinc-100">
        <div className="col-span-10 md:col-span-7">
          {/* Hero Section */}
          <div className="bg-zinc-100 w-full ">
            <Container
              size="2xl"
              py="xl"
              className=" flex items-center justify-between"
            >
              <div className="p-6">
                <div className="text-5xl font-bold text-black mb-6">
                  {pageData.title} Cost in {pageData.location}
                </div>
                <Text size="xl" mb="xl" className="text-black text-shadow-lg">
                  Starts from{" "}
                  <span className="text-[#4db368]">
                    ₹{pageData.startingCost}
                  </span>
                </Text>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {getStatsData(pageData.cost).map((value, index) => (
  <StatCard
    key={index}
    icon={value.icon}
    title={value.title}
    description={value.description}
  />
))}
                </div>
              </div>
            </Container>

            <div className="px-16 py-4 bg-white ml-8 rounded-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 bg-white">
                {/* First row of items */}
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Procedure Type</div>
                  <div className="text-gray-700">{pageData.procedureType}</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Anesthesia Type</div>
                  <div className="text-gray-700">
                    {pageData.anaesthetiaType}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Hospital Days</div>
                  <div className="text-gray-700">{pageData.hospitalDays}</div>
                </div>

                {/* Second row of items */}
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">
                    Procedure Duration
                  </div>
                  <div className="text-gray-700">
                    {pageData.procedureDuration}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Risk</div>
                  <div className="text-gray-700">{pageData.risk}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10 px-12">
              {/* Cost Estimation Button */}
              <button className="flex items-center px-8 py-2 rounded-lg text-white bg-[#1c7ed6] hover:bg-[#1c7ed6] focus:outline-none">
                <span className="mr-2"> Get Cost Estimation</span>
              </button>

              {/* WhatsApp Expert Button */}
              <button className="flex items-center px-8 py-2 rounded-lg text-[#1c7ed6] bg-white border-2 border-[#1c7ed6] hover:bg-[#1c7ed6] hover:text-white focus:outline-none">
                <IconBrandWhatsapp size={20} className="mr-2 text-[#1c7ed6]" />
                <span>WhatsApp Expert</span>
              </button>
            </div>
          </div>

          <Tabs
            color="teal"
            defaultValue="overview"
            value={activeTab}
            onChange={setActiveTab}
            className="px-6 py-4 mt-10"
          >
            <Tabs.List className="space-x-6 bg-white px-4 py-2 rounded-sm">
              <Tabs.Tab
                value="overview"
                className="text-lg mr-2 font-semibold text-black hover:text-teal-800 focus:outline-none focus:text-[#1f6c8a]"
              >
                Overview
              </Tabs.Tab>
              <Tabs.Tab
                value="doctors"
                className="text-lg font-semibold text-black hover:text-teal-800 focus:outline-none focus:text-[#1f6c8a]"
              >
                Doctors
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel
              value="overview"
              className="mt-2 py-4  rounded-lg shadow-sm"
            >
              <div className="bg-white p-8 rounded-md">
                <h1 className="text-3xl font-bold text-black">
                  How much Lipoma Removal Surgery cost?
                </h1>
                <p className="text-base text-gray-700 mt-2">
                  The cost of Lipoma Removal Surgery in Noida typically starts
                  from ₹25,000. However, the price can vary depending on the
                  healthcare facility and the complexity of the procedure. On
                  average, the cost is around ₹65,000, with the price range
                  going up to ₹82,000.
                </p>
              </div>

              {/* Doctors Carousel */}
              <div className="max-w-screen-xl mx-auto mt-4  mb-4 bg-white p-6 rounded-md">
                <h3 className="text-3xl font-bold">Our Expert Doctors</h3>

                <Stack className="space-y-6">
                 
                </Stack>
              </div>

              <div className="bg-white p-8 mt-4 rounded-md">
                <h1 className="text-3xl font-bold text-black ">
                  Factors Affecting Lipoma Surgery Cost In Noida
                </h1>
                <p className="mt-6 mb-1">
                  The cost of lipoma surgery in Noida can vary based on several
                  factors, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 ">
                  <li>Severity of the patient's condition</li>
                  <li>Type of treatment or procedure required</li>
                  <li>Duration and complexity of the treatment</li>
                  <li>Use of advanced medical equipment or technology</li>
                  <li>Specialist consultations or second opinions</li>
                  <li>Hospital stay or postoperative care requirements</li>
                  <li>Pre-surgery tests or post-treatment follow-ups</li>
                </ul>

                <p className="text-black font-semibold mt-4">
                  At MediEND, we ensure complete transparency and guidance
                  throughout your treatment journey.
                </p>
              </div>

              <div className="bg-white p-8 mt-4 rounded-md ">
                <h1 className="text-3xl font-bold text-black ">
                  Benefits of Lipoma Surgery
                </h1>
                <p className="mt-6 mb-1">Benefits of Lipoma Removal Surgery</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 ">
                  <li>Severity of the patient's condition</li>
                  <li>Type of treatment or procedure required</li>
                  <li>Duration and complexity of the treatment</li>
                  <li>Use of advanced medical equipment or technology</li>
                  <li>Specialist consultations or second opinions</li>
                  <li>Hospital stay or postoperative care requirements</li>
                  <li>Pre-surgery tests or post-treatment follow-ups</li>
                </ul>
              </div>

              <div className="bg-white p-8 mt-4 rounded-md">
                <h1 className="text-3xl font-bold text-black ">
                  Why Choose MediEND for Your Lipoma Removal Surgery?
                </h1>
                <p className="mt-6 mb-1">
                  At MediEND, we prioritize patient care and convenience at
                  every step of the treatment journey. Here’s what we offer:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 ">
                  <li>Severity of the patient's condition</li>
                  <li>Type of treatment or procedure required</li>
                  <li>Duration and complexity of the treatment</li>
                  <li>Use of advanced medical equipment or technology</li>
                  <li>Specialist consultations or second opinions</li>
                  <li>Hospital stay or postoperative care requirements</li>
                  <li>Pre-surgery tests or post-treatment follow-ups</li>
                </ul>
              </div>
            </Tabs.Panel>

            <Tabs.Panel
              value="doctors"
              className="mt-6 px-4 py-4 bg-white rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold text-teal-700">
                Second Panel
              </h2>
              <p className="text-base text-gray-700 mt-2">
                Content for doctors panel goes here.
              </p>
            </Tabs.Panel>
          </Tabs>
        </div>
        <div className="col-span-10 md:col-span-3 p-6 ">
          <div className="p-6 rounded-md border sticky top-6 bg-white">
            <h3 className="text-2xl font-semibold mb-4">
              Calculate Cost for Lasik Surgery
            </h3>
            <p className="text-sm text-gray-600">
              Speak to one of our representatives by filling the form below.
            </p>
            <AppointmentForm pageName="lipoma" />
          </div>
        </div>
      </div>
      {/* {
        pageData.reviews &&
      <Stories reviews={pageData.reviews} />
      } */}
      <div className=""></div>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        { pageData.specialties &&
        <Specialities specialitiesData={pageData.specialties}/>
}
        {pageData.faqs && <FrequentlyAskedQuestions faqs={pageData.faqs} />}
        <BookConsultation />
      </div>
    </>
  );
};

export default CostingPage;