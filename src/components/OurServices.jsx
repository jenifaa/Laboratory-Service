"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetching data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services));
  }, []);
  return (
    <div className="mb-10">
      <h2 className="text-center text-6xl mt-16 mb-8 font-bold font">
        {" "}
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-12 py-10">
        {services.slice(0, 6).map((service) => (
          <div
            key={service.id}
            className="relative bg-white py-6 shadow-lg rounded-lg border border-gray-200"
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-4 py-2 rounded-bl-full">
              {service.id}
            </div>

            <div className="flex items-center gap-8 px-6">
              <div className="text-3xl text-blue-600">
                <Image
                  src={service.icon}
                  alt="icon"
                  width={50}
                  height={50}
                ></Image>
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <hr className="w-full my-3" />

            <p className="text-gray-600 mt-3 px-6">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="px-10 flex justify-center items-center">
        <button>
          <Link
            className=" px-7 text-md my-3 py-3 rounded-full bg-blue-950 hover:bg-blue-700 text-white mx-4"
            href="/ourservices"
          >
            See More...
          </Link>
        </button>
      </div>
    </div>
  );
};

export default OurServices;
