import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Book from './Book';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tutorial" element={<Book />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { default as App } from "./App";
export { default as Book } from "./Book";
export { default as About } from "./About"
export { default as Contact } from "./Contact"
