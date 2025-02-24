import { FaMicroscope, FaClock, FaUserMd, FaFlask, FaShieldAlt, FaTrophy, FaUsers, FaHospital } from "react-icons/fa";
import Image from "next/image";

const whyChooseUs = [
  {
    id: 1,
    title: "State-of-the-Art Laboratory",
    description: "Equipped with the latest technology to ensure accurate and reliable testing.",
    icon: <FaMicroscope />,
    // image: "https://i.ibb.co/ZhMLrJc/lab.jpg",
  },
  {
    id: 2,
    title: "24/7 Service Availability",
    description: "We are open round the clock to provide urgent and scheduled testing services.",
    icon: <FaClock />,
    // image: "https://i.ibb.co/Xj6DL6W/24-7.jpg",
  },
  {
    id: 3,
    title: "Experienced Medical Professionals",
    description: "Our expert team includes top doctors, pathologists, and lab technicians.",
    icon: <FaUserMd />,
    // image: "https://i.ibb.co/qJ8xzGx/doctors.jpg",
  },
  {
    id: 4,
    title: "Advanced Diagnostic Accuracy",
    description: "Using AI-driven analysis for precise and efficient test results.",
    icon: <FaFlask />,
    // image: "https://i.ibb.co/Fq6Htbm/diagnostic.jpg",
  },
  {
    id: 5,
    title: "Strict Safety & Hygiene Standards",
    description: "Maintaining the highest level of cleanliness and safety protocols.",
    icon: <FaShieldAlt />,
    // image: "https://i.ibb.co/3kqGpyG/hygiene.jpg",
  },
  {
    id: 6,
    title: "Award-Winning Services",
    description: "Recognized for excellence in healthcare and diagnostics.",
    icon: <FaTrophy />,
    // image: "https://i.ibb.co/WvJcp8F/award.jpg",
  },
  {
    id: 7,
    title: "Trusted by Millions",
    description: "Serving a vast network of satisfied patients and healthcare providers.",
    icon: <FaUsers />,
    // image: "https://i.ibb.co/JsBcbWy/trusted.jpg",
  },
  {
    id: 8,
    title: "Comprehensive Healthcare Solutions",
    description: "Offering a wide range of medical and diagnostic services under one roof.",
    icon: <FaHospital />,
    // image: "https://i.ibb.co/gM1L92R/hospital.jpg",
  }
];

const WhyUs = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center gap-3">
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
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <div className="text-blue-600 text-5xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800">{feature.title}</h2>
              <p className="text-gray-600 mt-3">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
