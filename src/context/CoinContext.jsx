import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: 'usd', symbol: '$' });
  const [search, setSearch] = useState('');

  const fetchCoins = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=21&page=1&sparkline=false`
      );
      setCoins(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return (
    <CoinContext.Provider
      value={{ coins, currency, setCurrency, search, setSearch }}
    >
      {children}
    </CoinContext.Provider>
  );
};
