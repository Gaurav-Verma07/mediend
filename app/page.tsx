import Blogs from "./components/Blogs/Blogs";
import BookConsultation from "./components/BookConsultation/BookConsultation";
import ConsultationBox from "./components/ConsultationBox/ConsultationBox";
import DiseaseList from "./components/DiseaseList/DiseaseList";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Herobox from "./components/Herobox/Herobox";
import OurDoctors from "./components/OurDoctors/OurDoctors";
import Showcase from "./components/Showcase/Showcase";
import Specialities from "./components/Specialities/Specialities";
import Stories from "./components/Stories/Stories";
import WhyUs from "./components/WhyUs/WhyUs";

export default function HomePage() {
  return (
    <div>
      <Herobox />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ConsultationBox />
        <DiseaseList />
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
      <Stories />
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Blogs />
        <FAQs />
        <BookConsultation />
      </div>
      <Footer />
    </div>
  );
}
