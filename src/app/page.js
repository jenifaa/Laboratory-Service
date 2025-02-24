import About from "@/components/About";
import Banner from "@/components/Banner";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import LatestUpdate from "@/components/LatestUpdate";
import Newsletter from "@/components/Newsletter";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <OurServices></OurServices>
      <About></About>
      <LatestUpdate></LatestUpdate>
      <OurTeam></OurTeam>
      <WhyUs></WhyUs>
      <Faq></Faq>
      <Certificate></Certificate>
      <Contact></Contact>
      <Newsletter></Newsletter>
     
    </div>
  );
}
