import React, { Component, useState } from "react";
import "./weatherPreview.css";
import WEATHER_API_KEY from "../../../weather_secret";
import axios from "axios";

function WeatherPreview() {
  const [coord, setCoords] = useState({ lon: null, lat: null });

  async function getWeather() {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&APPID=${WEATHER_API_KEY}`;

    let results = await axios.get(weatherURL);

    this.setState({
      name: results.data.name,
      temp: Math.round(results.data.main.temp),
      icon: results.data.weather[0].icon,
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
  }, []);

  // const iconImg = `https://openweathermap.org/img/w/${this.state.icon}.png`;
  return (
    <div className="weather">
      <p>
        {this.state.name}: {this.state.temp} F &#778;
      </p>
      <img src={iconImg} alt="nope" className="iconImg" />
    </div>
  );
}

export default WeatherPreview;
