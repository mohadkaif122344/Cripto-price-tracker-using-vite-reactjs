import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';
import About from './About';

const Home = () => {
  return (
    <div className="container mx-auto p-2 pt-28">
    
      <div className="animate-fadeIn delay-100">
        <SearchBar />
      </div>

     
      <div className="animate-slideUp delay-200">
        <CoinList />
      </div>

      <div className="animate-fadeInScale delay-300">
        <About />
      </div>
    </div>
  );
};

export default Home;
