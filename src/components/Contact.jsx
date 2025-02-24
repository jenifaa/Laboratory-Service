import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-5xl font-bold font text-center text-gray-800 mb-6">
        {" "}
        📞Contact Us
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Get in touch with us for any inquiries, feedback, or assistance. Our
        team is available to help you with your needs.
      </p>

      <div className="flex items-center justify-between gap-24 w-11/12 mx-auto">
        <div>
          <div className="flex  mb-4 gap-8 text-center ">
            <div className="bg-white p-6 shadow-lg rounded-lg w-2/3 mx-auto hover:shadow-xl transition">
              <div className="flex">
              <FaPhoneAlt className="text-blue-950 text-3xl mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-gray-600">+1 234 567 890</p>
              <p className="text-gray-600">+1 987 654 321</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg w-2/3 mx-auto hover:shadow-xl transition">
              <div className="flex">
              <FaEnvelope className="text-blue-950 text-3xl mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-600">info@yourlab.com</p>
              <p className="text-gray-600">support@yourlab.com</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg w-2/3 mx-auto hover:shadow-xl transition">
              <div className="flex">
              <FaMapMarkerAlt className="text-blue-950 text-3xl mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-600">123 Medical Street</p>
              <p className="text-gray-600">New York, USA</p>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <FaClock className="text-blue-950 text-4xl mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600">
                Saturday - Sunday: 9:00 AM - 4:00 PM
              </p>
            </div>

            {/* Google Map (Replace with your location URL) */}
            <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.674858073243!2d-74.00601518459498!3d40.712776079331245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sus!4v1646933432823"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg w-1/2 rounded-lg p-8  mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 font">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-950 text-white py-3 rounded-md w-full flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
