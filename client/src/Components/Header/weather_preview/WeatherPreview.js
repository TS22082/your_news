import axios from "axios";
import React, { useState, useEffect } from "react";

import "./weatherPreview.css";

function WeatherPreview() {
  const [weather, setWeather] = useState({
    name: null,
    temp: null,
    icon: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const results = await axios.get(
        `/weather/by-location?lon=${position.coords.longitude}&lat=${position.coords.latitude}`
      );
      console.log(results);
      setWeather({
        name: results.data.name,
        temp: Math.round(results.data.main.temp),
        icon: results.data.weather[0].icon,
      });
    });
  }, []);

  const iconImg = `https://openweathermap.org/img/w/${weather.icon}.png`;
  return (
    <div className="weather">
      <p>
        {weather.name}: {weather.temp} F &#778;
      </p>
      <img src={iconImg} alt="nope" className="iconImg" />
    </div>
  );
}

export default WeatherPreview;
