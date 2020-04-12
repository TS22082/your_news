import React, { Component } from "react";
import "./Header.css";
import WeatherPreview from "./weather_preview/WeatherPreview";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h3 className="title">Aggregate News</h3>
        <WeatherPreview />
      </div>
    );
  }
}

export default Header;
