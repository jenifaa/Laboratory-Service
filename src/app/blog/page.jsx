import {
  FaCalendarAlt,
  FaInfoCircle,
  FaMicroscope,
  FaVials,
  FaHeartbeat,
  FaRadiation,
  FaUserMd,
  FaNotesMedical,
  FaStethoscope,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const latestUpdates = [
  {
    id: 1,
    title: "New COVID-19 Testing Facility Opened",
    link: "https://www.american.edu/student-affairs/covid-testing-3521.cfm",
    date: "February 20, 2025",
    description:
      "We have launched a new state-of-the-art COVID-19 testing facility with faster results and enhanced accuracy.",
    image: "https://i.ibb.co.com/C3WJjwKH/covid.jpg",
    icon: <FaMicroscope />,
  },
  {
    id: 2,
    title: "Advanced Blood Screening Now Available",
    link: "https://healthclinics.superdrug.com/services/advanced-health-check-blood-test",
    date: "February 10, 2025",
    description:
      "Introducing our latest blood screening services to ensure early disease detection and better health monitoring.",
    image: "https://i.ibb.co.com/5xM3TLtJ/blood.jpg",
    icon: <FaVials />,
  },
  {
    id: 3,
    title: "24/7 Emergency Lab Services Launched",
    link: "https://labaidgroup.com/specialized/patient/emergencyLab",
    date: "January 28, 2025",
    description:
      "We are now offering 24/7 emergency lab services to cater to urgent medical testing needs.",
    image: "https://i.ibb.co.com/NgFmpKj0/emergency.png",
    icon: <FaHeartbeat />,
  },
  {
    id: 4,
    title: "Radiology Services Enhanced",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3097673",
    date: "January 15, 2025",
    description:
      "Upgraded our radiology department with the latest MRI and CT scan technology.",
    image: "https://i.ibb.co.com/Qv999SRT/radio.webp",
    icon: <FaRadiation />,
  },
  {
    id: 5,
    title: "Specialist Doctor Appointments Available",
    link: "https://seradoctor.com/service/doctors/Medical-More",
    date: "January 5, 2025",
    description:
      "Now you can book online appointments with top medical specialists.",
    image: "https://i.ibb.co.com/CsNJKCyt/doctor.jpg",
    icon: <FaUserMd />,
  },
  {
    id: 6,
    title: "New Digital Medical Reports System",
    link: "https://www.blaze.tech/lp/no-code-low-code?gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s292MJx8oOAfWj8xwCKZ5NzxIqqzPtYvYTnSYpW991zTSzYvCSMaU4aAlelEALw_wcB",
    date: "December 20, 2024",
    description:
      "Access your medical test results online with our secure digital report system.",
    image: "https://i.ibb.co.com/4wr7PRB7/report.jpg",
    icon: <FaNotesMedical />,
  },
  {
    id: 7,
    title: "Pediatric Checkups Introduced",
    link: "https://www.millerchildrens.memorialcare.org/blog/importance-regular-pediatric-check-ups-year-round-guide",
    date: "December 10, 2024",
    description:
      "Comprehensive pediatric checkup services now available for children.",
    image: "https://i.ibb.co.com/bRXLm6NT/ckeck.webp",
    icon: <FaStethoscope />,
  },
  {
    id: 8,
    title: "Cancer Screening Programs Launched",
    link: "https://www.cancer.gov/news-events/press-releases/2024/cancer-screening-research-network-launches",
    date: "November 25, 2024",
    description: "Early cancer detection screening programs now available.",
    image: "https://i.ibb.co.com/xtrqxfmx/cancer.jpg",
    icon: <FaMicroscope />,
  },
  {
    id: 9,
    title: "State-of-the-Art Pathology Lab Opened",
    link: "https://cset.mnsu.edu/departments/electrical-and-computer-engineering-technology/scholarships/current-students/laboratories",
    date: "November 10, 2024",
    description:
      "We have introduced an advanced pathology lab for more precise testing.",
    image: "https://i.ibb.co.com/mrpgwcX3/labs.jpg",
    icon: <FaVials />,
  },
];

const page = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center font mb-10">Latest Updates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestUpdates.map((update) => (
          <div
            key={update.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <Image
              src={update.image}
              alt={update.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 flex items-center">
                {update.icon} {update.title}
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <FaCalendarAlt className="mr-2" /> {update.date}
              </div>
              <p className="text-gray-700 mb-4">{update.description}</p>
              <div className="flex justify-end">
                {update.link && (
                  <div className="flex justify-end">
                    <Link
                      href={update.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      <FaInfoCircle className="mr-2" /> Learn More
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
