import React from 'react';
import Navbar from './Header';
import Footer from './Footer';
import { motion } from "framer-motion"

function Home() {
  return (

    <div>
      <Navbar className="nav"/>
      <motion.div initial={{ opacity: 0, duration: 10 }}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 0 }}>

      <div className="site">
        <h1 className="title">ピカピカハスボー:</h1>
        <h2 className="logo"><img src={require('./logo.png')} alt="shining lotad"/></h2>
        <div className="introContainer">
        <p2 className="intro">
        🐬
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

export default Home;
