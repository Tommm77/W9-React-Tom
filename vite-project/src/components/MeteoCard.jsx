import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MeteoCard.css";
import soleil from "../img/soleil.png";
import nuage from "../img/nuages.png";
import pluie from "../img/pluie.png";
import CountUp from "react-countup";

const WeatherCard = ({ city, postalCode }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "7f849204dabe1ea3e88bc336347eeadd";

  const getTemperatureImage = (temp) => {
    if (temp >= 20) return soleil;
    else if (temp >= 15) return nuage;
    else if (temp >= 10) return pluie;
  };

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données météo",
          error
        );
      });
  }, [city]);

  return (
    weatherData && (
      <div className="MeteoCard">
        <div className="weatherInfo">
          <h2>{city}</h2>
          <h3>Code Postal: <CountUp end={parseInt(postalCode, 10)} /></h3>

          <p>
            Température: <CountUp end={weatherData.main.temp} /> °C
          </p>
          <p>
            Température Max: <CountUp end={weatherData.main.temp_max} /> °C
          </p>
          <p>
            Température Min: <CountUp end={weatherData.main.temp_min} /> °C
          </p>
          <p>
            Vitesse du Vent: <CountUp end={weatherData.wind.speed} /> m/s
          </p>
        </div>
        <div className="weatherImage">
          <img
            src={getTemperatureImage(weatherData.main.temp)}
            alt="Temperature"
          />
        </div>
      </div>
    )
  );
};

export default WeatherCard;
