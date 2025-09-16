
    



import { FaTwitter, FaFacebook, FaInstagram, FaCoins } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center p-6 mt-8 border-t-4 border-gray-600 
                       transition-colors duration-500 hover:bg-gray-800 animate-fadeIn">
      
      
      <div className="flex justify-center items-center gap-2 mb-3">
        <FaCoins className="text-yellow-300 text-2xl md:text-3xl" /> 
        <h2 className="text-xl md:text-2xl font-bold tracking-wide hover:text-blue-400 transition duration-300">
          CryptoTracker
        </h2>
      </div>

      
      <p className="mb-2 text-lg md:text-xl text-gray-200">
        Track live cryptocurrency prices, search your favorite coins, and switch currencies easily.
      </p>

      <p className="mb-2 text-lg md:text-xl flex justify-center items-center gap-6 mt-4">
        <a
          href="#"
          className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
        >
          <FaTwitter className="text-xl" /> Twitter
        </a>
        <a
          href="#"
          className="flex items-center gap-2 hover:text-blue-500 transition duration-300"
        >
          <FaFacebook className="text-xl" /> Facebook
        </a>
        <a
          href="#"
          className="flex items-center gap-2 hover:text-pink-500 transition duration-300"
        >
          <FaInstagram className="text-xl" /> Instagram
        </a>
      </p>

 
<div className="mt-4 pt-3">
  
  <div className="w-28 border-t-2 border-gray-500 mx-auto mb-2"></div>

  <p className="text-md md:text-lg text-gray-300">
    &copy; 2025 <span className="font-bold">CryptoTracker</span>. All rights reserved.
  </p>
</div>


    </footer>
  );
};

export default Footer;
