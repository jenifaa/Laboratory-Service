import React from 'react';

const aboutData = [
  {
    title: "Our Mission",
    description: "We are committed to providing exceptional scientific and diagnostic services.",
    icon: "🌍"
  },
  {
    title: "Our Vision",
    description: "To be a trusted partner in the healthcare and scientific communities.",
    icon: "🔬"
  },
  {
    title: "Accuracy",
    description: "We ensure the highest level of accuracy in all our tests.",
    icon: "✅"
  },
  {
    title: "Innovation",
    description: "We continuously explore new methodologies and research to improve our services.",
    icon: "💡"
  },
  {
    title: "Integrity",
    description: "We operate with the highest ethical standards in every aspect of our work.",
    icon: "⚖️"
  },
  {
    title: "Compassion",
    description: "We value every client and patient, offering personalized services.",
    icon: "❤️"
  },
  {
    title: "Blood Tests",
    description: "Complete Blood Count (CBC), Lipid Panel, Liver Function Test, etc.",
    icon: "🩸"
  },
  {
    title: "Genetic Testing",
    description: "DNA testing, prenatal screening, and more.",
    icon: "🧬"
  },
  {
    title: "Diagnostic Imaging",
    description: "X-rays, ultrasounds, and other imaging tests.",
    icon: "📷"
  },
  {
    title: "Research & Development",
    description: "Collaborating for groundbreaking clinical research and trials.",
    icon: "🔬"
  },
  {
    title: "Quality Control",
    description: "Regular audits and stringent protocols ensure the best results.",
    icon: "🏅"
  },
  {
    title: "Our Team",
    description: "A group of highly skilled scientists and professionals.",
    icon: "👩‍🔬"
  }
];

const page = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
