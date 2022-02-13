import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import About from "./About";
import Clock from "./Clock";
import Projects from "./Projects";
import Contact from "./Contact";
import Socials from "./Socials"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

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
            <img src={require("../assets/logo.png")} alt="shining lotad" />
          </h2>
        </div>
        <div className="homeTitle">
          {" "}
          Hi, I'm Vincent. <br />This is what I'm all
          <motion.div whileHover={{ scale: 1.4, transition: { duration: 1 } }}>
            <HashLink smooth to="#about" style={{ color: "white", fontWeight: "bolder" }}>
              about!
            </HashLink>
          </motion.div>
        <div className="homeFooter">
        <div>
          <Socials/>
            </div>
          </div>
        </div>
        <div id="about">
        <About />
        </div>
        <div id="contact">
        <div className="downArrow">
        <HashLink smooth to="#contact" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faArrowCircleDown} size="2x" />
        </HashLink>
        </div>
        <Contact />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
