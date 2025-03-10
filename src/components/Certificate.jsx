import { FaCertificate, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015 Certified",
    description: "Our lab meets international quality management standards for excellence.",
    issueDate: "January 10, 2024",
    image: "https://i.ibb.co.com/Gg3376S/cer.png",
  },
  {
    id: 2,
    title: "National Health Laboratory Accreditation",
    description: "Accredited by the National Health Board for high-standard lab services.",
    issueDate: "March 15, 2024",
    image: "https://i.ibb.co.com/Xkt1VgTZ/cer2.jpg",
  },
  {
    id: 3,
    title: "Good Clinical Laboratory Practice (GCLP)",
    description: "Certified for maintaining safety and accuracy in clinical research testing.",
    issueDate: "June 22, 2024",
    image: "https://i.ibb.co.com/BRNrK4L/cer3.jpg",
  },
  {
    id: 4,
    title: "WHO Approved Laboratory",
    description: "Recognized by the World Health Organization for excellence in diagnostics.",
    issueDate: "August 5, 2024",
    image: "https://i.ibb.co.com/hR1c72nc/Certificate-13.png",
  },
  {
    id: 5,
    title: "Environmental Safety Compliance",
    description: "Certified for implementing eco-friendly and sustainable lab practices.",
    issueDate: "September 12, 2024",
    image: "https://i.ibb.co.com/h1CgRwcH/env.jpg",
  },
];

const Certificate = () => {
  return (
    <div className="w-11/12 mx-auto  py-16">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 font flex items-center justify-center gap-3">
        <FaCertificate className="text-blue-950" /> Our Certifications
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
        Our laboratory is certified by internationally recognized health organizations, ensuring 
        high standards of quality, safety, and accuracy in every test we conduct.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={200}
              height={100}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FaCertificate className="text-green-500" /> {cert.title}
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <FaCalendarAlt className="mr-2" /> {cert.issueDate}
              </div>
              <p className="text-gray-700">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
