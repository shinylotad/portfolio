import React from 'react';
import './App.css';
import Home from './Home';
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Weather from "./Weather"
import { Routes, Route, useLocation, useHistory, } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Scroll"



function App() {
  const location = useLocation();

  return (
    <div>
    <ScrollToTop/>
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </AnimatePresence>
    </div>
  );
}
export default App;
