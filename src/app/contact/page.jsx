import Head from "next/head";
// import lab from '../../../public/assets/images/laboratory-glassware-microscope-arrangement.jpg'
const page = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Your Company Name</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries, support, or collaboration."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center  text-white text-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/8H9gdXr/2149731519.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-70 p-10 rounded-lg">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We’re here to help. Reach out anytime!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto my-16 p-8 bg-base-200 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full md:col-span-2"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full md:col-span-2"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full md:col-span-2 h-32"
            required
          ></textarea>
          <button className="btn btn-primary md:col-span-2">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold">Our Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">📍 Address</h3>
            <p>123 Business Street, City, Country</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">📞 Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">📧 Email</h3>
            <p>contact@yourcompany.com</p>
          </div>
        </div>
      </section>

      {/* Live Chat Section */}
      <section className="max-w-6xl mx-auto my-16 p-8 bg-blue-100 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold">Need Instant Help?</h2>
        <p className="text-lg mt-2">Chat with our support team live!</p>
        <button className="btn btn-primary mt-4">Start Live Chat</button>
      </section>

      {/* Office Hours Section */}
      <section className="max-w-6xl mx-auto my-16 p-8 bg-base-200 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Office Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold">🕒 Monday - Friday</h3>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">📆 Saturday - Sunday</h3>
            <p>Closed</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            What services do you offer?
          </div>
          <div className="collapse-content">
            <p>
              We offer laboratory testing, diagnostics, and medical consulting
              services.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            How can I book an appointment?
          </div>
          <div className="collapse-content">
            <p>
              You can book an appointment by calling us or filling out the
              online form.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="max-w-6xl mx-auto my-16 p-8 bg-base-200 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="https://source.unsplash.com/150x150/?person"
              className="rounded-full mx-auto"
              alt="CEO"
            />
            <h3 className="text-lg font-semibold mt-2">John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="text-center">
            <img
              src="https://source.unsplash.com/150x150/?doctor"
              className="rounded-full mx-auto"
              alt="Lab Head"
            />
            <h3 className="text-lg font-semibold mt-2">Dr. Sarah Smith</h3>
            <p>Head of Laboratory</p>
          </div>
          <div className="text-center">
            <img
              src="https://source.unsplash.com/150x150/?nurse"
              className="rounded-full mx-auto"
              alt="Support"
            />
            <h3 className="text-lg font-semibold mt-2">Mark Taylor</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="my-12">
        <iframe
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default page;
