import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  return(
    <div className="navWrap">
     <nav>
      <div>
        <ul>
          <li className="home hlink"><Link to="/home" style={{ color:'white',textDecoration: 'none' }}>home  </Link></li>
          <li className="about hlink"><HashLink smooth to="/home#about" style={{ color:'white',textDecoration: 'none' }}>about  </HashLink></li>
          <li className="projects hlink"><Link to="/projects" style={{ color:'white',textDecoration: 'none' }}>projects  </Link></li>
          <li className="contact hlink"><HashLink smooth to="/contact" style={{ color:'white', textDecoration: 'none' }}>contact  </HashLink></li>
          <li className="blog hlink"><a href="https://blog.shinylotad.com/" style={{ color:'white', textDecoration: 'none' }}>blog  </a></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
