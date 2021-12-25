import React from 'react';
import './App.css';
import Home from './Home';
import About from "./About"
import Contact from "./Contact"
import Book from "./Book"
import { Routes, Route, useLocation, useHistory } from "react-router-dom"
import { AnimatePresence } from "framer-motion";



function App() {
  const location = useLocation();

  return (
    <div>
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorial" element={<Book />} />
      </Routes>
    </AnimatePresence>
    </div>
  );
}
export default App;
