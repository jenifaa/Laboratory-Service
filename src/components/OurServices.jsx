"use client";
import { useEffect, useState } from "react";
import {
  FaMicroscope,
  FaVials,
  FaHeartbeat,
  FaUserMd,
  FaXRay,
  FaFlask,
  FaDna,
  FaUserNurse,
  FaBacterium,
  FaCubes,
} from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     title: "Lab Testing",
//     icon: <FaMicroscope />,
//     description: "Accurate and fast lab tests for all your needs.",
//   },
//   {
//     id: 2,
//     title: "Blood Analysis",
//     icon: <FaVials />,
//     description: "Detailed blood testing for precise diagnostics.",
//   },
//   {
//     id: 3,
//     title: "Cardiac Screening",
//     icon: <FaHeartbeat />,
//     description: "Advanced heart health monitoring and tests.",
//   },
//   {
//     id: 4,
//     title: "Consultation",
//     icon: <FaUserMd />,
//     description: "Expert medical advice from certified doctors.",
//   },
//   {
//     id: 5,
//     title: "X-Ray & Imaging",
//     icon: <FaXRay />,
//     description: "High-resolution imaging for accurate assessments.",
//   },
//   {
//     id: 6,
//     title: "Chemical Analysis",
//     icon: <FaFlask />,
//     description: "Comprehensive chemical and pathology testing.",
//   },
//   {
//     id: 7,
//     title: "Bioprocess Engineering",
//     icon: <FaDna />,
//     description: "Optimized bioprocess solutions for industrial applications.",
//   },
//   {
//     id: 8,
//     title: "Genetic Analysis",
//     icon: <FaUserNurse />,
//     description: "Cutting-edge genetic screening and modification techniques.",
//   },
//   {
//     id: 9,
//     title: "Microbial Fermentation",
//     icon: <FaBacterium />,
//     description: "Innovative microbial fermentation for biotech advancements.",
//   },
//   {
//     id: 10,
//     title: "Enzyme Engineering",
//     icon: <FaFlask />,
//     description: "Design and application of enzymes for industrial use.",
//   },
//   {
//     id: 11,
//     title: "Biomaterial Development",
//     icon: <FaCubes />,
//     description:
//       "Advanced biomaterials for medical and industrial applications.",
//   },
//   {
//     id: 12,
//     title: "Tissue Engineering",
//     icon: <FaMicroscope />,
//     description: "Regenerative medicine and artificial tissue development.",
//   },
// ];

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetching data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services));
  }, []);
  return (
    <div>
      <h2 className="text-center text-6xl my-10"> Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-12 py-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white py-6 shadow-lg rounded-lg border border-gray-200"
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-4 py-2 rounded-bl-full">
              {service.id}
            </div>

            <div className="flex items-center gap-8 px-6">
              <div className="text-3xl text-blue-600">
                {service.icon === "FaMicroscope" && <FaMicroscope />}
                {service.icon === "FaVials" && <FaVials />}
                {service.icon === "FaHeartbeat" && <FaHeartbeat />}
                {service.icon === "FaUserMd" && <FaUserMd />}
                {service.icon === "FaUserNurse" && <FaUserNurse />}
                {service.icon === "FaXRay" && <FaXRay />}
                {service.icon === "FaBacterium" && <FaBacterium />}
                {service.icon === "FaFlask" && <FaFlask />}
                {service.icon === "FaCubes" && <FaCubes />}
                {service.icon === "FaDna" && <FaDna />}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <hr className="w-full my-3" />

            <p className="text-gray-600 mt-3 px-6">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
