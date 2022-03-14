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
import Logo from "../assets/Logo.js";

function Home() {
  return (
    <div>
			<Navbar className="nav" />
				<div className="homeFooter">
					<Footer/>
				</div>
      <motion.div
        initial={{ x: "0%", y: "-50%", opacity: 0 }}
        animate={{ x: "0%", y: "0", opacity: 1, transition: { duration: 4 } }}
        exit={{ y: "100%", opacity: 0, transition: { duration: 1.3 } }}
      >
        <div className="centerDiv">
					<Logo />
        </div>
        <div id="about">
       	 <About />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
