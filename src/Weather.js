import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const key = process.env.REACT_APP_WEATHER_KEY;

function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`
        )
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
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

          <a href="https://github.com/shinylotad/portfolio/blob/main/src/Weather.js"
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
