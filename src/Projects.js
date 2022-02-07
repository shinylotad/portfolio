import React from "react";
import Navbar from "./Header.js";
import Footer from "./Footer.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Time from "./Time";
import Weather from "./Weather";

function Projects() {
  return (
    <div>
      <Navbar className="nav" />
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1, transition: { duration: 1.3 } }}
        exit={{ opacity: 0, transition: { duration: 1.3 } }}
      >
      <div className="projectWrapper">
        <h1 className="title"> #worldclock </h1>
        <Time />

        <h1 className="title"> #weather </h1>
        <Weather />

        <h1 className="title">  </h1>
      </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Projects;
