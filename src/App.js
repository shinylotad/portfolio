import React from 'react';
import './App.css';
import Home from './components/Home';
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Weather from "./components/Weather"
import { Routes, Route, useLocation, useHistory, } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/Scroll"
import Ball from "./components/Ball"


function App() {
  const location = useLocation();

  return (
    /* My threejs ball component is called here because I want it to essentially be the background of the entire app.
    ScrollToTop is here simply to animate smoothly back to the top of the page when new links in my router are clicked.
    AnimatePresence is a wrapper for my framer-motion animations. */
    <div>
    <Ball/>
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
    <div className="copywrite">
    Made with love by VINCENT MORENO &copy; All rights reserved.
    </div>
    </div>
  );
}
export default App;
