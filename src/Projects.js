import React from 'react';
import Navbar from './Header.js';
import Footer from './Footer.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import Time from './Time'
function Projects() {
  return (
    <div>
    <Navbar className="nav"/>
    <motion.div initial={{ x:"100%", opacity: 0 }}
                animate={{ x:"0", opacity: 1, transition: { duration: 1.3} }}
                exit={{ opacity: 0,transition: { duration: 1.3} }}>


          <div className="projectContainer">
          <div className="introContainer">
          <p className="time"> This is a world clock app. It's written using the JavaScript Date(); function.<br/>
          The source code can be found<br/></p>
          <a href="">here!</a>
          </div>
          </div>
          <Time/>

          <div className="projectContainer">
          <div className="introContainer">

          </div>
          </div>
          <div className="projectContainer">
          <div className="introContainer">

          </div>
          </div>
          <div className="projectContainer">
          <div className="introContainer">

          </div>
      </div>
    </motion.div>
    <Footer/>
    </div>
  );
}

export default Projects;
