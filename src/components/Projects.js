import React from "react";
import Navbar from "./Header.js";
import Footer from "./Footer.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Time from "./Time";
import Weather from "./Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <div>
      <Navbar className="nav" />
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1, transition: { duration: 1.3 } }}
        exit={{ opacity: 0, transition: { duration: 1.3 } }}
      >
      <h1 className="title"> <a href="https://blog.shinylotad.com/" style={{ color:'white', textDecoration: 'none' }}>blog.shinylotad.com:</a> </h1>
      <div className="projectWrapper">
        <div className="appContainer">
          <div className="projectLiner">
          <a href="https://blog.shinylotad.com/"><img src={require("../assets/shinyblog.png")} alt="blog" width="500" height="284" className="blogImg"/></a>
      This is my personal blog. I made it using gatsby, and a minimalist starter.
      The styling is heavily edited and I did remove a lot of components to match the
      aesthetic of this main site.
      <ul className="techWrap">
        <li className="techList">html </li>
        <li className="techList">css </li>
        <li className="techList">javascript </li>
        <li className="techList">react </li>
        <li className="techList">gatsby </li>
        </ul>
        <a href="https://github.com/shinylotad/blog.shinylotad.com"
          className="here">
          <FontAwesomeIcon icon={faGitAlt} size="1x" />
        </a>
          </div>

        </div>
      </div>
      <h1 className="title"> some cool components I made: </h1>
      <div className="projectWrapper">
        <Time />
        <Weather />
      <h1 className="title"> </h1>
      </div>

      </motion.div>
    </div>
  );
}

export default Projects;
