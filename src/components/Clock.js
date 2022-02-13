import React, { Component } from "react";
import Navbar from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

function Clock() {

    //Defining the variable for today's date with JS's Date object.
    let today = new Date();
    let date =
      today.getMonth() +
      1 +
      "/" +
      today.getDate() +
      "/" +
      today.getFullYear() +
      " ";
    //Grabbing the current time.
    let time =
      (today.getHours() > 12 ? today.getHours() - 12 : today.getHours()) +
      ":" +
      (today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes() +
      ":" +
      (today.getSeconds() < 10 ? "0" : "") +
      today.getSeconds() +
      (today.getHours() > 12 ? " PM" : " AM");
    //Variable with both date and time for convenience.
    let localDT = date + time;
    //Time around the world because why not. :)
    let jst = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
    let nab = new Date().toLocaleString("en-US", {timeZone: "Africa/Windhoek",});
    let lon = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
    let hon = new Date().toLocaleString("en-US", {timeZone: "Pacific/Honolulu",});
    let pac = new Date().toLocaleString("en-US", { timeZone: "US/Pacific" });

    return (
      <div>
          <div className="appContainer">
            <div className="time">
              <ul className="worldClock">
                <li>Seattle: {pac}</li>
                <li>Tokyo: {jst}</li>
                <li>Namibia: {nab}</li>
                <li>London: {lon}</li>
                <li>Honolulu: {hon}</li>
              </ul>
            </div>
            <p className="projectLiner">
              {" "}
              Local: {localDT}{" "} <br/> <br/>
              <a href="https://github.com/shinylotad/portfolio/blob/main/src/Clock.js"
                className="here">
                <FontAwesomeIcon icon={faGitAlt} size="1x" />
              </a>
            </p>
        </div>
      </div>
    );
}

export default Clock;