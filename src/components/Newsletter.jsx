import { FaPaperPlane, FaQuoteLeft, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import bg from '../../public/assets/images/lab.jpg'
const Newsletter = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Stay Updated, Stay Ahead!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Join our exclusive newsletter for the latest trends, expert insights, and special offers.
          </p>
          <div className="bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto lg:mx-0">
            <h2 className="text-2xl font-semibold text-center mb-4">Subscribe Now</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
              <button type="submit" className="btn btn-primary w-full flex items-center justify-center">
                <FaPaperPlane className="mr-2" /> Subscribe Now
              </button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-4">
              *We value your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <Image
            src={bg}
            alt="Newsletter"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Subscribers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
            <p className="text-gray-600">
              "This newsletter keeps me informed with high-quality content. Highly recommend subscribing!"
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">— Alex Johnson</h4>
          </div>
          {/* Review 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
            <p className="text-gray-600">
              "I love the exclusive offers and insights I receive. It’s worth every email!"
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">— Emily Davis</h4>
          </div>
          {/* Review 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
            <p className="text-gray-600">
              "Great content and valuable updates! I look forward to each email."
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">— Michael Smith</h4>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Follow Us for More Updates</h3>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-blue-400 text-3xl hover:text-blue-600 transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-pink-600 text-3xl hover:text-pink-800 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-700 text-3xl hover:text-blue-900 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
