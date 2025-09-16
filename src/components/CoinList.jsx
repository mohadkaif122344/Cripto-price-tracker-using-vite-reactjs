

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import { motion } from "framer-motion";

const CoinList = () => {
  const { coins, search, currency } = useContext(CoinContext);
  const navigate = useNavigate();

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCoinClick = (id) => {
    navigate(`/coin/${id}`);
  };

 
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -5, 
      boxShadow: "0px 10px 25px rgba(0, 123, 255, 0.6)" 
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCoins.map((coin, index) => (
        <motion.div
          key={coin.id}
          onClick={() => handleCoinClick(coin.id)}
          className="p-6 border rounded-xl bg-gray-800 text-white flex items-center gap-6 cursor-pointer"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ delay: index * 0.05, duration: 0.3, type: "spring", stiffness: 120 }}
        >
          
          <motion.img
            src={coin.image}
            alt={coin.name}
            width="60"
            height="60"
            className="rounded-full"
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
          />

        
          <div>
            <h2 className="font-bold text-xl md:text-2xl transition-colors duration-200 hover:text-blue-400">
              {coin.name} ({coin.symbol.toUpperCase()})
            </h2>
            <p className="text-lg md:text-xl mt-1 transition-colors duration-200 hover:text-blue-300">
              Price: {currency.symbol}{coin.current_price.toLocaleString()}
            </p>
            <p className="text-lg md:text-xl mt-1 transition-colors duration-200 hover:text-blue-300">
              Market Cap: {currency.symbol}{coin.market_cap.toLocaleString()}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CoinList;
