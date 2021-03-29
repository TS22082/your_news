import axios from "axios";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";

import "./weatherPreview.css";

function WeatherPreview() {
  const [weather, setWeather] = useState({
    name: null,
    temp: null,
    icon: null,
  });

  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const results = await axios.get(
          `/weather/by-location?lon=${position.coords.longitude}&lat=${position.coords.latitude}`
        );

        setWeather({
          name: results.data.name,
          temp: Math.round(results.data.main.temp),
          main: results.data.weather[0].main,
        });
      } catch (err) {
        console.log({ error: err });
      }
    });
  }, []);

  return !weather.name ? null : (
    <h3 className="weather">
      {`${weather.temp} F`} &#778; - {weather.main}
    </h3>
  );
}

export default WeatherPreview;
