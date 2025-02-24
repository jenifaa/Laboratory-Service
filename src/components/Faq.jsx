"use client"
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "What types of lab tests do you offer?",
    answer: "We offer a wide range of tests including blood tests, radiology scans, genetic testing, and specialized health screenings.",
  },
  {
    question: "How long does it take to receive test results?",
    answer: "Most test results are available within 24-48 hours, but some specialized tests may take longer.",
  },
  {
    question: "Do I need an appointment for a lab test?",
    answer: "Walk-ins are welcome, but we recommend booking an appointment for faster service.",
  },
  {
    question: "Are my test results confidential?",
    answer: "Absolutely. We follow strict privacy policies to ensure that all test results remain confidential.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance providers. Please contact us to confirm your coverage.",
  },
  {
    question: "Can I access my test results online?",
    answer: "Yes! We provide a secure online portal where you can view and download your test results.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center gap-3">
        <FaQuestionCircle className="text-blue-600" /> Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-lg">
            <button
              className="w-full text-left flex justify-between items-center p-5 bg-white hover:bg-blue-50 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-blue-600" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-5 bg-blue-50 text-gray-700 transition-opacity duration-500">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
