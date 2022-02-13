import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

/* I unapologetically stole this useInterval function
from (https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
because React hooks are very confusing when I need intervals. */

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Clock() {

    //Interval to update the time every tick. Clears it afterwards so no memory leaks.
    useInterval(() => {
      setTime({ time: Date.now() })
    },1000);

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
    let [time, setTime] = useState();
      time =
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
              <a href="https://github.com/shinylotad/portfolio/blob/main/src/components/Clock.js"
                className="here">
                <FontAwesomeIcon icon={faGitAlt} size="1x" />
              </a>
            </p>
        </div>
      </div>
    );
}

export default Clock;
