import React, { Component } from 'react';
import Navbar from './Header'
import Footer from './Footer'
import Clock from './Clock'
import { motion } from 'framer-motion'

function Time() {

  return(
    <div>
      <motion.div initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.3} }}
                  exit={{ opacity: 0,transition: { duration: 1.3} }}>
        <Clock/>
      </motion.div>
    </div>
  );
}

export default Time;
