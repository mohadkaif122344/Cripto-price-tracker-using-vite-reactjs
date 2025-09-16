

import Contact from "./Contact";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white max-w-6xl mx-auto p-6 pt-28 space-y-12">
   
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center underline underline-offset-4 decoration-white cursor-pointer"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05, color: "#3B82F6", transition: { duration: 0.3 } }}
      >
        About CryptoTracker
      </motion.h1>

     
      <motion.p
        className="text-lg md:text-xl leading-relaxed cursor-pointer"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ x: 5, color: "#60A5FA", transition: { duration: 0.3 } }}
      >
        CryptoTracker is a modern React application providing live cryptocurrency prices.
        Track the top 21 cryptocurrencies, switch between USD, EUR, and INR, and search for your
        favorite coins in real-time. The app uses CoinGecko's API for live market data.
      </motion.p>

     
      <div className="md:flex md:gap-16">
       
        <motion.div
          className="md:flex-1 mb-8 md:mb-0"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 cursor-pointer hover:text-blue-400 transition-colors duration-300">
            Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
            {[
              "Live price tracking of top 21 cryptocurrencies",
              "Search and filter coins in real-time",
              "Switch between USD, EUR, and INR currencies",
              "Detailed coin view with market stats and history",
              "Responsive design for desktop and mobile",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ color: "#3B82F6", scale: 1.02, transition: { duration: 0.3 } }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="md:flex-1"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4 cursor-pointer hover:text-blue-400 transition-colors duration-300">
            Technologies Used
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
            {[
              "React.js with Functional Components & Hooks",
              "React Router DOM for navigation",
              "Tailwind CSS for styling and responsive design",
              "Framer Motion for animations and hover effects",
              "Axios & CoinGecko API for fetching crypto data",
              "Chart.js or Recharts for coin price charts",
              "Web3Forms for contact form integration",
              "React Icons for adding icons",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ color: "#3B82F6", scale: 1.02, transition: { duration: 0.3 } }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="cursor-pointer"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default About;
