import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className="socialContainer">
      <h1>

      <a href="https://github.com/shinylotad/portfolio"
        className="source social">
        <FontAwesomeIcon icon={faGitAlt} size="1x" />
      </a>

      <a href="https://www.linkedin.com/in/vincent-moreno/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
      </a>

      <a href="https://github.com/shinylotad"
        className="github social">
        <FontAwesomeIcon icon={faGithubAlt} size="1x" />
      </a>

      </h1>
    </div>
  );
}

export default Socials;
