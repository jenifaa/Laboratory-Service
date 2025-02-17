import { FiPhoneCall } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
const Header = () => {
  return (
    <div className="flex gap-28 items-center border-b bg-base-200">
      <div className="flex w-2/5  bg-blue-950 text-white items-center gap-5  rounded-tr-[10%_90%] px-5 py-3 ">
        <p>Fast, <span className="font-semibold text-blue-200">Accurate</span> Lab Services.</p>
        <p className="flex items-center gap-1">
         <span className="flex justify-center items-center bg-blue-700 w-8 h-8 rounded-full"> <FiPhoneCall /></span> +012345678910
        </p>
      </div>
      <div className="w-3/5 flex items-center  text-sm justify-end px-8">
        <p className="flex items-center gap-1"><CiClock2 className="text-xl text-blue-500 font-semibold"></CiClock2>Mon-Sat 9am-10pm, Sun-closed |</p>
        <p className="ml-1 flex items-center gap-1"> <MdOutlineEmail className="text-xl text-blue-500 "></MdOutlineEmail> labsync@gmail.com |</p>
        <p className="ml-1 flex items-center gap-1">
          <CiLocationArrow1 className="text-xl text-blue-500"></CiLocationArrow1>
          123 Science Avenue, Innovation Park, New York,USA
        </p>
      </div>
    </div>
  );
};

export default Header;
