import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import About from "./About";
import Clock from "./Clock";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Home() {
  return (
    <div>
      <Navbar className="nav" />
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1, transition: { duration: 1.3 } }}
        exit={{ y: "100%", opacity: 0, transition: { duration: 1.3 } }}
      >
        <div className="centerDiv">
            <h2 className="logo">
              <img src={require("./logo.png")} alt="shining lotad" />
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 7 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            ></motion.div>
          </div>
          <div className="homeTitle"> Hi, I'm Vincent. <br/> This is what I'm all
          <motion.div
            whileHover={{ scale: 1.4, transition: { duration: 1 } }}
          >
          <Link to="/about" style={{ color:'white',fontWeight:'bolder' }}>about!</Link>
          </motion.div>
          </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Home;
