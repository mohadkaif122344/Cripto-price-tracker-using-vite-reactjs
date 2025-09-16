
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CoinDetail from "./pages/CoinDetail";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/coin/:id" element={<CoinDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
