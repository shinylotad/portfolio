import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1, transition: { duration: 1.3 } }}
        exit={{ x: "100%", opacity: 0, transition: { duration: 1.3 } }}
      >
        <div className="site">
          <div className="aboutContainer">
            <p className="aboutMe">
              Hey, my name is Vincent. I am a 20 something year old who isn't
              working in his dream role (yet!). <br />
              <br />
              I enjoy <br/><br/>
              <FontAwesomeIcon className="techIcon" icon={ faHtml5 } size="2x"/> <br/>
              <FontAwesomeIcon className="techIcon" icon={ faCss3 } size="2x"/> <br/>
              <FontAwesomeIcon className="techIcon" icon={ faJs } size="2x"/> <br/>
              <FontAwesomeIcon className="techIcon" icon={ faReact } size="2x"/> <br/>
              <br/><br/>
              "Time and tide wait for no man." is a phrase that really resonates
              with me and something I apply to every facet of my life. I have a
              very steadfast personality. I actually enjoy being humbled. The
              greatest levels of happiness I have experienced came from
              learning, and executing what I've learned practically. <br />
              <br />
              My professional background is in 'People Management' but, my true
              passion is building things with technology. My favorite thing
              about coding is the problem-solving aspect of everything.
              Struggling and figuring out the solution is a wonderful feeling.
              <br />
              <br />
              Please check out my <Link to="/projects" style={{ color:'white',fontWeight:'bolder' }}>projects.</Link>
              <br />
            </p>
          </div>
          <div className="aboutContainer">
          <p className="aboutMe">
           This site is built mobile-first using React.js. I use framer-motion for animations, and threejs for 3D.
           </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
