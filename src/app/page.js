import About from "@/components/About";
import Banner from "@/components/Banner";
import OurServices from "@/components/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <OurServices></OurServices>
    </div>
  );
}
