"use client";
import Image from "next/image";

import "animate.css";

import banner from "../../public/assets/images/labor.jpeg";
import banner1 from "../../public/assets/images/labwork.webp";
import banner2 from "../../public/assets/images/labwork2.png";
import banner3 from "../../public/assets/images/labwork3.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div
     
      className="relative w-full h-[600px]"
    >
      <Image
        className="w-full h-full object-cover"
        src={banner}
        alt="banner"
        priority
      />

      <div className="absolute inset-0 flex px-10 flex-col md:flex-row items-center justify-between  bg-white/70">
        <div className="md:w-1/2 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Where Science Meets
          </h1>
          <p className="text-4xl md:text-5xl font-bold mb-10">
            Precision in Diagnostics.
          </p>
          <p className="mt-4 mb-3 ">
            ✅ Advanced Diagnostics – Cutting-edge technology for precise and
            reliable results.
          </p>
          <p className="mb-3">
            ✅ Fast & Accurate Testing – Quick turnaround times without
            compromising accuracy.
          </p>
          <p>
            ✅ Certified & Trusted – Accredited lab services ensuring the
            highest standards of care.
          </p>
          <div className="flex items-center gap-7 mt-7">
            <button className="border rounded-full px-5 py-2 bg-blue-950 text-white flex items-center gap-2">
              <FaCalendarAlt></FaCalendarAlt> Appointment
            </button>
            <button className="border border-black rounded-full px-7 py-2 flex items-center gap-2">
              <MdPermContactCalendar></MdPermContactCalendar>Contact Us
            </button>
          </div>
        </div>
        <div className="flex flex-row  gap-5 md:w-1/2 justify-end items-center px-10">
          <div className="flex flex-col gap-11">
            <div>
              <Image
                src={banner1}
                alt="banner1"
                className="w-52 h-52 rounded-full border-4 border-white"
              />
            </div>

            <div>
              <Image
                src={banner2}
                alt="banner2"
                className="w-52 h-52 rounded-full border-4 border-white"
              />
            </div>
          </div>
          <div>
            <Image
              src={banner3}
              alt="banner3"
              className="w-52 h-52 rounded-full  border-4 border-white"
            />
          </div>
        </div>
        {/* <div className="flex flex-row  gap-5 md:w-1/2 justify-end items-center px-10">
          <div>
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <Image
                src={banner1}
                alt="banner1"
                className="w-52 h-52 rounded-full border-4 border-white"
              />
            </motion.div>

            <motion.div
              animate={{ x: [50, 100, 50] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity }}
            >
              <Image
                src={banner2}
                alt="banner2"
                className="w-52 h-52 rounded-full border-4 border-white"
              />
            </motion.div>
          </div>
          <motion.div
            animate={{ x: [-30, 50, -30] }}
            transition={{ duration: 10,delay:5, repeat: Infinity }}
          >
            <Image
              src={banner3}
              alt="banner3"
              className="w-52 h-52 rounded-full mb-20 border-4 border-white"
            />
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
