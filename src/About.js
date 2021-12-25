import React from 'react';
import Navbar from './Header';
import Footer from './Footer';
import { motion } from "framer-motion"

function About() {
  return (
    <div>
    <Navbar className="nav"/>
    <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
      <div className="site">
        <div className="introContainer">
          <p2 className="aboutMe">--<br/>
            Hey, my name is Vincent Moreno. I am a 20 something year old who isn't working in his dream role (yet. 👋😁 ). <br/><br/>
            "Time and tide wait for no man." is a phrase that really resonates with me
            and something I apply to every facet of my life. I have a very steadfast personality. I actually enjoy
            being humbled.
            The greatest levels of happiness I have experienced came from learning, and executing what I've
            learned practically. <br/><br/>
            My professional background is in 'People Management' but, my true passion is
            building things with technology. My favorite thing about coding is the
            problem-solving aspect of everything. Struggling and figuring out the solution is a wonderful feeling.
            <br/><br/>
            Please check out the links on the right if you're interested in connecting with me, and seeing my code.
            <br/>
            --

          </p2>
        </div>
      <p3 className="outro">
      2021年以来輝いている
      SHINING SINCE 2021
      </p3>
    </div>
    </motion.div>
    <Footer/>
    </div>
  );
}

export default About;
