import Blogs from "./components/Blogs/Blogs";
import BookConsultation from "./components/BookConsultation/BookConsultation";
import ConsultationBox from "./components/ConsultationBox/ConsultationBox";
import DiseaseList from "./components/DiseaseList/DiseaseList";
import { faqs } from "./components/FAQs/faqs";
import FrequentlyAskedQuestions from "./components/FAQs/FrequentlyAskedQuestions";
import FAQs from "./components/FAQs/FrequentlyAskedQuestions";
import Footer from "./components/Footer/Footer";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Herobox from "./components/Herobox/Herobox";
import OurDoctors from "./components/OurDoctors/OurDoctors";
import Showcase from "./components/Showcase/Showcase";
import Specialities from "./components/Specialities/Specialities";
import Stories from "./components/Stories/Stories";
import WhyUs from "./components/WhyUs/WhyUs";

const storiesData = [
  {
    imageUrl: "/assets/stories/stories_1.png",
    highlight: "“Strength to embrace my son and life again”",
    review:
      "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    imageUrl: "/assets/stories/stories_2.png",
    highlight: "“We feel like we can finally live a normal life!”",
    review:
      "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
  {
    imageUrl: "/assets/stories/stories_1.png",
    highlight: "“Strength to embrace my son and life again”",
    review:
      "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    imageUrl: "/assets/stories/stories_2.png",
    highlight: "“We feel like we can finally live a normal life!”",
    review:
      "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
];

export default function HomePage() {
  return (
    <div>
      <Herobox />
      <div data-aos="zoom-in" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ConsultationBox />
      </div>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <DiseaseList />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Showcase />
      </div>
      <WhyUs />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Specialities />
      </div>
      <GetInTouch />
      <div style={{ maxWidth: "1370px", margin: "0 auto" }}>
        <OurDoctors />
      </div>
      <Stories reviews={storiesData} />
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Blogs />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FrequentlyAskedQuestions faqs={faqs} />
        <BookConsultation />
      </div>
    </div>
  );
}
