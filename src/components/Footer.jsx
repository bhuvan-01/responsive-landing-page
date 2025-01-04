import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 text-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center bg-gray-700 p-4 rounded-lg w-full justify-center md:justify-start">
          <FaPhoneAlt className="text-blue-400 text-2xl mr-4" />
          <div>
            <p className="font-medium">Phone Number</p>
            <p className="text-gray-300">+974 3118 1843</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center bg-gray-700 p-4 rounded-lg w-full justify-center md:justify-start">
          <FaEnvelope className="text-blue-400 text-2xl mr-4" />
          <div>
            <p className="font-medium">Email Address</p>
            <p className="text-gray-300">Elbrithcqhr@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center bg-gray-700 p-4 rounded-lg w-full justify-center md:justify-start">
          <FaMapMarkerAlt className="text-blue-400 text-2xl mr-4" />
          <div>
            <p className="font-medium">Office Location</p>
            <p className="text-gray-300">Ambassador Street, Zone 61</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center mt-10 md:mt-0">
      <div className="flex items-center space-x-8 p-6"> 
        <Image
          src="/assets/logo.png"
          alt="Elbrit Logo"
          width={150}
          height={50}
        />
        <p className="text-sm text-gray-400 max-w-xs">
          Your health, physical and emotional well-being is important to us.
          We are always by your side and have made it even easier for you to find the necessary vitamins.
        </p>
      </div>
    </div>

  
    <div className="text-center mt-10 text-sm text-gray-400 border-t border-gray-800 pt-4">
      © Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
    </div>
  </footer>
);

export default Footer;
