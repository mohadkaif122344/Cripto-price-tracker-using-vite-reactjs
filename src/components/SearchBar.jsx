

import { useContext, useState, useEffect, useRef } from "react";
import { CoinContext } from "../context/CoinContext";
import { FaTimes } from "react-icons/fa";
import { div } from "framer-motion/client";

const SearchBar = () => {
  const { coins, setSearch } = useContext(CoinContext);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  
  useEffect(() => {
    if (input.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      setSearch(""); 
    } else {
      const filtered = coins.filter((coin) =>
        coin.name.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); 
      setShowSuggestions(true);
    }
  }, [input, coins, setSearch]);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (value) => {
    setSearch(value || input);
    setInput(value || input);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setInput("");
    setSearch(""); 
    setShowSuggestions(false);
  };

  return (

    <div className="flex items-center justify-center  my-10" 
    ref={containerRef}>

  <div className="flex md:flex-row w-full max-w-[700px] gap-4">
    
   
    <div className="relative flex-1 w-full">
      <input
        type="text"
        placeholder="Search Crypto..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="pl-6 pr-12 py-4 w-full rounded-full border border-gray-300 bg-gray-900 text-white text-lg placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
                   transition-all duration-300 shadow-xl hover:scale-105"
      />

      {input && (
        <span
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-white transition-colors text-lg"
        >
          <FaTimes />
        </span>
      )}
    


      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute mt-1 w-full bg-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {suggestions.map((coin) => (
            <li
              key={coin.id}
              onClick={() => handleSearch(coin.name)}
              className="px-4 py-3 hover:bg-yellow-500 hover:text-gray-900 cursor-pointer transition-colors text-lg"
            >
              {coin.name} ({coin.symbol.toUpperCase()})
            </li>
          ))}
        </ul>
      )}
    </div>

    
    <button
  onClick={() => handleSearch()}
  className="
    px-6 py-3 sm:px-8 sm:py-4
    bg-gradient-to-r from-yellow-400 to-yellow-500
    text-gray-900 font-bold
    rounded-full
    hover:from-yellow-500 hover:to-yellow-400
    transition-all duration-300
    shadow-xl
    hover:scale-105
    text-base sm:text-lg
    flex items-center justify-center
  "
>
  Search
</button> 







  </div>
</div>

  );
};

export default SearchBar;    

