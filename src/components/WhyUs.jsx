import {
  FaMicroscope,
  FaClock,
  FaUserMd,
  FaFlask,
  FaShieldAlt,
  FaTrophy,
  FaUsers,
  FaHospital,
} from "react-icons/fa";
import Image from "next/image";

const whyChooseUs = [
  {
    id: 1,
    title: "State-of-the-Art Laboratory",
    description:
      "Equipped with the latest technology to ensure accurate and reliable testing.",
    icon: <FaMicroscope />,
    image: "https://i.ibb.co.com/pjVkyzw0/laboratory-design.jpg",
  },
  {
    id: 2,
    title: "24/7 Service Availability",
    description:
      "We are open round the clock to provide urgent and scheduled testing services.",
    icon: <FaClock />,
    image: "https://i.ibb.co.com/NgFmpKj0/emergency.png",
  },
  {
    id: 3,
    title: "Experienced Medical Professionals",
    description:
      "Our expert team includes top doctors, pathologists, and lab technicians.",
    icon: <FaUserMd />,
    image: "https://i.ibb.co.com/7dw12F2m/doctors.jpg",
  },
  {
    id: 4,
    title: "Advanced Diagnostic Accuracy",
    description:
      "Using AI-driven analysis for precise and efficient test results.",
    icon: <FaFlask />,
    image: "https://i.ibb.co.com/kV6Hcmq9/dig.jpg",
  },
  {
    id: 5,
    title: "Strict Safety & Hygiene Standards",
    description:
      "Maintaining the highest level of cleanliness and safety protocols.",
    icon: <FaShieldAlt />,
    image: "https://i.ibb.co.com/CNNfq6x/safe.jpg",
  },
  {
    id: 6,
    title: "Award-Winning Services",
    description: "Recognized for excellence in healthcare and diagnostics.",
    icon: <FaTrophy />,
    image: "https://i.ibb.co.com/27hxyG5v/award.webp",
  },
  {
    id: 7,
    title: "Trusted by Millions",
    description:
      "Serving a vast network of satisfied patients and healthcare providers.",
    icon: <FaUsers />,
    image: "https://i.ibb.co.com/mCMDsXsZ/group.png",
  },
  {
    id: 8,
    title: "Comprehensive Healthcare Solutions",
    description:
      "Offering a wide range of medical and diagnostic services under one roof.",
    icon: <FaHospital />,
    image: "https://i.ibb.co.com/kskHrvpK/service.webp",
  },
];

const WhyUs = () => {
  return (
    <div className="w-11/12 mx-auto  py-16">
      <h1 className="text-5xl font-bold text-center font mb-16 text-gray-800 flex items-center justify-center gap-3">
        ⭐ Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {whyChooseUs.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-start">
              <div className="flex gap-2 items-center">
                {" "}
                <div className="text-blue-950 text-3xl mb-4">
                  {feature.icon}
                </div>
                <h2 className="text-xl font-semibold text-black">
                  {feature.title}
                </h2>
              </div>
              <p className="text-gray-600 mt-3">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
