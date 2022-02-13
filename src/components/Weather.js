import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";


//This is setting our API key from env file.
const key = process.env.REACT_APP_WEATHER_KEY;

function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    //cancel is a boolean variable that's only purpose is to clean up our component..
    let cancel = false;
    const fetchData = async () => {
      //This function uses GeoLocation to grab the user's Latitude and Longitude coordinates.
      navigator.geolocation.getCurrentPosition(function (position) {
        //This stores them in the Lat and Long variables.
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      //This is our API call.

      /* This throws a few errors in console because of the event handling.
      It takes some time for variables to define. Will fix in near future. For now program runs fine */

      await axios
        .get(
          //We use ES6 to grab those variables defined earlier.
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`
        )
        .then((result) => {
          setData(result);
          //Console logging the object for now to see what we need to reference.
          console.log(result);
          if (cancel) return;
          setIsVisible(false);
        });
    };
    fetchData();

    return () => {
      cancel = true;
    }
  }, [lat, long]);

  return (
    <div>
    /* We must call this if statement because there's a delay with variables being defined.
    IF our object is NOT undefined then ... ELSE  show a loading div */

      {typeof data.data != "undefined" ? (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1, transition: { duration: 1.3 } }}
          exit={{ opacity: 0, transition: { duration: 1.3 } }}
        >
        <div className="appContainer">
          <div className="projectLiner">
          You are in: {data.data.name}, {data.data.sys.country}. <br/>
          The temperature is: {data.data.main.temp}&deg;C <br/>
          The weather is: {data.data.weather[0].description} <br/><br/>

          <a href="https://github.com/shinylotad/portfolio/blob/main/src/components/Weather.js"
            className="here">
            <FontAwesomeIcon icon={faGitAlt} size="1x" />
          </a>
          </div>
        </div>
        </motion.div>
      ) : (
          <div className="appContainer">
            <div className="loading">
              loading
            </div>
          </div>
      )}
    </div>
  );
}

export default Weather;
