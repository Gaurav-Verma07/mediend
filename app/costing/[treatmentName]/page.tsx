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

export const treatments = [
    {
      name: "Lipoma Removal",
      costRange: "₹500 - ₹800",
      imageUrl: "https://via.placeholder.com/400x300?text=Lipoma+Removal",
    },
    {
      name: "Knee Replacement",
      costRange: "₹7,000 - ₹12,000",
      imageUrl: "https://via.placeholder.com/400x300?text=Knee+Replacement",
    },
    {
      name: "Hair Transplant",
      costRange: "₹1,000 - ₹4,000",
      imageUrl: "https://via.placeholder.com/400x300?text=Hair+Transplant",
    },
    {
      name: "Cosmetic Surgery",
      costRange: "₹3,000 - ₹10,000",
      imageUrl: "https://via.placeholder.com/400x300?text=Cosmetic+Surgery",
    },
  ];
  
  export const doctorsData = [
    {
      imgUrl: "https://example.com/doctor1.jpg",
      name: "Dr. Deepak Kumar Sinha",
      specialty: "General Surgery",
      additionalInfo: "Surgery, Proctology, Laparoscopic Surgery...",
      experience: 19,
      recommended: 99,
    },
    {
      imgUrl: "https://example.com/doctor2.jpg",
      name: "Dr. Suman Sharma",
      specialty: "Pediatrics",
      additionalInfo: "Neonatal care, Child health...",
      experience: 15,
      recommended: 98,
    },
    {
      imgUrl: "https://example.com/doctor3.jpg",
      name: "Dr. Rajesh Gupta",
      specialty: "Orthopedics",
      additionalInfo: "Joint replacement, Spine Surgery, Trauma...",
      experience: 20,
      recommended: 97,
    },
    {
      imgUrl: "https://example.com/doctor4.jpg",
      name: "Dr. Asha Patel",
      specialty: "Dermatology",
      additionalInfo: "Acne treatment, Laser surgery, Skin care...",
      experience: 18,
      recommended: 95,
    },
    {
      imgUrl: "https://example.com/doctor5.jpg",
      name: "Dr. Ravi Mehta",
      specialty: "Cardiology",
      additionalInfo: "Heart disease management, Hypertension...",
      experience: 22,
      recommended: 100,
    },
    {
      imgUrl: "https://example.com/doctor6.jpg",
      name: "Dr. Priya Iyer",
      specialty: "Gynecology",
      additionalInfo: "Pregnancy care, Women’s health...",
      experience: 17,
      recommended: 96,
    },
    {
      imgUrl: "https://example.com/doctor7.jpg",
      name: "Dr. Vinod Kumar",
      specialty: "Neurology",
      additionalInfo: "Epilepsy, Stroke rehabilitation, Headache management...",
      experience: 21,
      recommended: 99,
    },
    {
      imgUrl: "https://example.com/doctor8.jpg",
      name: "Dr. Neha Verma",
      specialty: "Psychiatry",
      additionalInfo: "Mental health, Anxiety disorders, Depression...",
      experience: 14,
      recommended: 94,
    },
  ];
  
  export const treatmentCards = [
    {
      title: "Heart Treatment",
      description: "Advanced treatment for heart diseases.",
      icon: <IconHeartbeat size={40} />,
    },
    {
      title: "Brain Surgery",
      description: "Cutting-edge procedures for brain surgeries.",
      icon: <IconBrain size={40} />,
    },
    {
      title: "Orthopedic Care",
      description: "Comprehensive care for bone and joint problems.",
      icon: <IconBone size={40} />,
    },
    {
      title: "Dental Services",
      description: "Expert dental treatments for a healthy smile.",
      icon: <IconDental size={40} />,
    },
  ];
  
  export const pageData = {
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "We offer a range of services including consultations, workshops, and training in various areas of expertise.",
      },
      {
        question: "How can I book a consultation?",
        answer:
          "You can book a consultation through our online booking system or by contacting us directly via email or phone.",
      },
      {
        question: "What are the working hours?",
        answer: "Our office is open from Monday to Friday, 9 AM to 5 PM.",
      },
      {
        question: "Do you offer online consultations?",
        answer:
          "Yes, we provide online consultations via video call or phone for your convenience.",
      },
    ],
  };
  

  export const statsData = [
    {
      title: "40,500",
      description: "Lowest Approx",
      icon: <IconHeart size={20} />,
      bgColor: "#F4F7FB",
      color:"#0069f6",
    },
    {
      title: "62000",
      description: "Avg. Approx",
      icon: <IconClock size={20} />,
      bgColor: "#fff8f0",
      color:"#ff8a04",
    },
    {
      title: "84000",
      description: "Highest Approx",
      icon: <IconTarget size={20} />,
      bgColor: "#dcffe5",
      color:"#49b365",
    },
  ];


  export const storiesData = [
    {
      imageUrl: "/assets/stories/stories_1.png",
      highlight: "“Strength to embrace my son and life again”",
      review: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
      name: "Vanamala Ramesh",
    },
    {
      imageUrl: "/assets/stories/stories_2.png",
      highlight: "“We feel like we can finally live a normal life!”",
      review: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
      name: "Stephanie Powell",
    },
    {
      imageUrl: "/assets/stories/stories_1.png",
      highlight: "“Strength to embrace my son and life again”",
      review: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
      name: "Vanamala Ramesh",
    },
    {
      imageUrl: "/assets/stories/stories_2.png",
      highlight: "“We feel like we can finally live a normal life!”",
      review: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
      name: "Stephanie Powell",
    },
  ];

type Slug = {
  _type: "slug";
  current: string;
};

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
  specialties?: Specialty[];
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

export interface Specialty {
  _type: "specialty";
  title: string;
  description?: string;
  image?: Image;
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

  console.log(treatmentName);

  const [pageData, setPageData] = useState<Treatment | null>(null);
  const [isLoading, setIsLoading] = useState(true);



  if (isLoading) return <LoadingScreen />;
  if (!pageData) return <div>No data found</div>;

  return (
    <>
      <div className="grid grid-cols-10 bg-zinc-100">
        <div className="col-span-7">
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
                  {statsData.map(
                    (value,index) => {
                        return <StatCard
                        key={index}
                        icon={<IconTarget size={20} />}
                        title={value.title}
                        description={value.description}
                      />
                    }
                  )}
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
                  <Carousel
                    className="p-4"
                    slideSize="45%"
                    slideGap="xs"
                    loop
                    align="start"
                  >
                    {doctorsData.map((doctor, index) => (
                      <Carousel.Slide key={index}>
                        <div className="bg-white shadow-lg rounded-lg">
                          <div className="flex gap-4">
                            <img
                              src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
                              alt={doctor.name}
                              className="rounded-lg w-36 h-36 object-cover"
                            />
                            <div className="flex flex-col justify-between">
                              <div>
                                <h4 className="text-xl text-blue-600">
                                  {doctor.name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {doctor.specialty}
                                </p>
                                <p className="text-xs text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
                                  {doctor.additionalInfo}
                                </p>
                              </div>
                              <div className="flex gap-4 flex-col mt-4">
                                <div className="flex items-center">
                                  <div className="flex gap-2 items-center">
                                    <IconBriefcase
                                      className="text-blue-600"
                                      size={15}
                                    />
                                    <h6 className="text-blue-600 text-sm">
                                      {doctor.experience}+
                                    </h6>
                                  </div>
                                  <p className="text-xs text-gray-500 ml-2">
                                    Experience
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <div className="flex gap-x-2 items-center">
                                    <IconThumbUp
                                      className="text-blue-600"
                                      size={15}
                                    />
                                    <h6 className="text-blue-600">
                                      {doctor.recommended}%
                                    </h6>
                                  </div>
                                  <p className="text-xs text-gray-500 ml-2">
                                    Recommended
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="w-full mt-4 py-2 px-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg">
                            Book Appointment
                          </button>
                        </div>
                      </Carousel.Slide>
                    ))}
                  </Carousel>
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
        <div className="col-span-3 p-6 ">
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
      <Stories reviews={storiesData} />
      <div className=""></div>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Specialities />
        {pageData.faqs && <FrequentlyAskedQuestions faqs={pageData.faqs} />}
        <BookConsultation />
      </div>
    </>
  );
};

export default CostingPage;