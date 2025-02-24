import {
  FaUserMd,
  FaMicroscope,
  FaFlask,
  FaHeartbeat,
  FaUserNurse,
} from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Olivia Smith",
    role: "Chief Medical Officer",
    description:
      "Expert in clinical diagnostics and laboratory management with 15+ years of experience.",
    image: "https://i.ibb.co.com/xSLprh8x/doc1.jpg",
    icon: <FaUserMd />,
  },
  {
    id: 2,
    name: "Dr. Mark Johnson",
    role: "Senior Pathologist",
    description: "Specialist in advanced pathology and disease diagnostics.",
    image: "https://i.ibb.co.com/zTjGCzbN/doc2.webp",
    icon: <FaMicroscope />,
  },
  {
    id: 3,
    name: "Sophia Wilson",
    role: "Lead Lab Technician",
    description: "Ensuring high-quality lab tests and accurate results.",
    image: "https://i.ibb.co.com/cKP8tQgf/tech.jpg",
    icon: <FaFlask />,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Cardiology Specialist",
    description: "Dedicated to providing accurate heart-related diagnostics.",
    image: "https://i.ibb.co.com/YFgCJnS6/card.jpg",
    icon: <FaHeartbeat />,
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Senior Nurse Practitioner",
    description: "Expert in patient care and medical testing procedures.",
    image: "https://i.ibb.co.com/b5L7V5XZ/nurse.webp",
    icon: <FaUserNurse />,
  },
];

const OurTeam = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-5xl font font-bold text-center mb-12 flex items-center justify-center gap-3">
        🏥 Our Professional Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-200"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={100}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-start">
              <div className="flex items-center gap-2">
                {" "}
                <div className="text-blue-600 text-2xl mb-3">{member.icon}</div>
                <h2 className="text-xl font-semibold">{member.name}</h2>
              </div>
              <h3 className="text-gray-600 text-md font-medium">
                {member.role}
              </h3>
              <p className="text-gray-700 mt-3">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
