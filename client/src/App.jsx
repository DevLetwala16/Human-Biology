import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HumanBiologyChapters from './pages/HumanBiologyChapters';
import SkinBiologyChapters from './pages/SkinBiologyChapters';
import ChapterDetail from './pages/ChapterDetail';
import About from './pages/About';
import BackgroundOrbs from './components/BackgroundOrbs';
import './index.css';
import './App.css';

function AppContent() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/chapters/human-biology" element={<HumanBiologyChapters />} />
        <Route path="/chapters/skin-biology" element={<SkinBiologyChapters />} />
        <Route path="/chapter/:subject/:id" element={<ChapterDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('bio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <BackgroundOrbs />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AppContent />
    </Router>
  );
}

export default App;
