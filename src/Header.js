import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  return(
    <div className="navWrap">
    <nav>
      <div>
        <ul>
          <li className="home hlink"><Link to="/home" style={{ color:'white',textDecoration: 'none' }}>.home  .</Link></li>
          <li className="about hlink"><Link to="/about" style={{ color:'white',textDecoration: 'none' }}>about  .</Link></li>
          <li className="projects hlink"><Link to="/projects" style={{ color:'white',textDecoration: 'none' }}>projects  .</Link></li>
          <li className="contact hlink"><Link to="/contact" style={{ color:'white', textDecoration: 'none' }}>contact  </Link></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
