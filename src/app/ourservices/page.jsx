"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetching data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <div>
      <h2 className="text-center text-6xl font font-bold mt-7">Our Services</h2>
      <div className="mb-10 grid grid-cols-1 gap-12 px-12 py-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex items-center gap-10 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Service Image */}
            <div className="w-2/6">
              <Image
                src={service.image}
                width={400}
                height={400}
                alt="service"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Service Content */}
            <div className="w-4/6 bg-white py-6 shadow-lg rounded-lg border border-gray-200">
              <div className="flex items-center gap-8 px-6">
                <div className="text-3xl text-blue-600">
                  <Image
                    src={service.icon}
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <hr className="w-full my-3" />
              <p className="px-12 py-4">{service.details}</p>
              <p className="text-gray-600 mt-3 px-6">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
