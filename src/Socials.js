import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div class="socialContainer">
      <h3>

      <a href="https://www.linkedin.com/in/vincent-moreno/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
      </a>

      <a href="https://github.com/shinylotad"
        className="github social">
        <FontAwesomeIcon icon={faGithubAlt} size="1x" />
      </a>

      </h3>
    </div>
  );
}

export default Socials;
