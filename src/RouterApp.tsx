import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PortfolioDetail from './pages/PortfolioDetail';

function RouterApp() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Routes>
      <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/about" element={<About isDarkMode={isDarkMode} onBack={() => navigate('/')} />} />
      <Route
        path="/project/:slug"
        element={<PortfolioDetail isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onBack={() => navigate('/#portfolio')} />}
      />
    </Routes>
  );
}

export default RouterApp;


