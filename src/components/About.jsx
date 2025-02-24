import Image from "next/image";
import labTask from "../../public/assets/images/labTest.jpg";
import labTask2 from "../../public/assets/images/labtest2.jpg";

const About = () => {
  return (
    <div className=" my-10">
      <div className="flex justify-between items-center w-11/12 mx-auto my-16 bg-white shadow-lg rounded-lg p-8">
        <div className="w-3/5">
          <h2 className="text-4xl font-bold mb-4 leading-snug font text-gray-800">
            🚀 Advancing Science & Innovation Through Biochemical Engineering   🌿 
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We provide precise biochemical analysis to assess tree health, detect diseases, and improve sustainability. Our cutting-edge testing methods help researchers, conservationists, and industries make data-driven decisions for a greener future.
          </p>
          <button className="bg-blue-950 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>
        <div className="w-2/5 flex justify-end">
          <Image
            style={{
              borderRadius: "60px 120px 0px 120px",
            }}
            className="w-80 h-64 object-cover shadow-lg"
            src={labTask}
            alt="labTask"
          ></Image>
        </div>
      </div>
      <div className="flex justify-between items-center w-11/12 mx-auto my-16 bg-white shadow-lg rounded-lg p-8">
        <div className="w-2/5 flex justify-start">
          <Image
            style={{
              borderRadius: "120px 60px 120px 0px",
            }}
            className="w-80 h-64 object-cover shadow-lg"
            src={labTask2}
            alt="labTask"
          ></Image>
        </div>
        <div className="w-3/5">
          <h2 className="text-4xl font-bold mb-4 leading-snug font text-gray-800">
            🦠 Unlocking the Mysteries of Microorganisms: Advancing Science for Better Health and Innovation  🍄 
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            At the forefront of scientific exploration, we delve deep into the world of microorganisms, providing comprehensive microbiology testing and analysis. Our expertise ensures accurate identification, diagnosis, and research on bacterial, viral, and fungal infections, empowering medical professionals with precise data for effective treatment plans.
          </p>
          <button className="bg-blue-950 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
