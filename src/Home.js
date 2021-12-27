import React from 'react';
import Navbar from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import About from './About';
import Clock from './Clock';
import Projects from './Projects'
import Contact from './Contact'

function Home() {
  return (

    <div>
      <Navbar className="nav"/>
      <motion.div initial={{ x:"-100%", opacity: 0, }}
                  animate={{ x:"0%", opacity: 1, transition: { duration: 1.3} }}
                  exit={{ y:"100%", opacity: 0, transition: { duration: 1.3}}}>
      <div className="site">
        <div className="introContainer">
          <h2 className="logo"><img src={require('./logo.png')} alt="shining lotad"/></h2>
          <h1 className="title"></h1>
          <p2 className="intro">
          </p2>
          <motion.div initial={{ opacity: 0, }}
                      animate={{ opacity: 1, transition: { duration: 7} }}
                      exit={{ opacity: 0, transition: { duration: 1}}}>
          </motion.div>
        </div>
      </div>
        </motion.div>
      <Footer/>
    </div>

  );
}

export default Home;
