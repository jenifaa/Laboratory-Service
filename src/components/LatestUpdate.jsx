import React from "react";
import { FaCalendarAlt, FaInfoCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const latestUpdates = [
  {
    id: 1,
    title: "New COVID-19 Testing Facility Opened",
    date: "February 20, 2025",
    description: "We have launched a new state-of-the-art COVID-19 testing facility with faster results and enhanced accuracy.",
    image: "https://i.ibb.co.com/C3WJjwKH/covid.jpg",
  },
  {
    id: 2,
    title: "Advanced Blood Screening Now Available",
    date: "February 10, 2025",
    description: "Introducing our latest blood screening services to ensure early disease detection and better health monitoring.",
    image: "https://i.ibb.co.com/5xM3TLtJ/blood.jpg",
  },
  {
    id: 3,
    title: "24/7 Emergency Lab Services Launched",
    date: "January 28, 2025",
    description: "We are now offering 24/7 emergency lab services to cater to urgent medical testing needs.",
    image: "https://i.ibb.co.com/NgFmpKj0/emergency.png",
  },
];

const LatestUpdate = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <h1 className="text-5xl font-bold text-center font mb-16">📢See Our Latest Updates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestUpdates.map((update) => (
          <div key={update.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src={update.image}
              alt={update.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{update.title}</h2>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <FaCalendarAlt className="mr-2" /> {update.date}
              </div>
              <p className="text-gray-700 mb-4">{update.description}</p>
              <div className="flex justify-end">
                <Link href="/blog" className="flex items-center bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  <FaInfoCircle className="mr-2" /> Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdate;