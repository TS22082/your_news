import axios from "axios";
import React, { useEffect, useState } from "react";

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
        main: results.data.weather[0].main,
      });
    });
  }, []);

  return !weather.name ? null : (
    <div className="weather">
      <h3>
        {`${weather.name}: ${weather.temp} F`} &#778; - {weather.main}
      </h3>
    </div>
  );
}

export default WeatherPreview;
