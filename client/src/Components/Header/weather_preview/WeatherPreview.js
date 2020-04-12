import React, { Component } from "react";
import "./weatherPreview.css";
import WEATHER_API_KEY from "../../../weather_secret";
import axios from "axios";

class WeatherPreview extends Component {
  constructor() {
    super();
    this.state = { longitude: "", latitude: "", name: "", temp: "", icon: "" };
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather() {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&APPID=${WEATHER_API_KEY}`;

    let results = await axios.get(weatherURL);

    this.setState({
      name: results.data.name,
      temp: Math.round(results.data.main.temp),
      icon: results.data.weather[0].icon,
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
      this.getWeather();
    });
  }

  render() {
    const iconImg = `https://openweathermap.org/img/w/${this.state.icon}.png`;
    return !this.state.name ? null : (
      <div className="weather">
        <p>
          {this.state.name}: {this.state.temp} F &#778;
        </p>
        <img src={iconImg} alt="nope" className="iconImg" />
      </div>
    );
  }
}

export default WeatherPreview;