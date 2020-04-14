import React from "react";
import "./Header.css";
import WeatherPreview from "./weather_preview/WeatherPreview";

function Header() {
  return (
    <div className="header">
      <h3 className="title">Aggregate News</h3>
      <WeatherPreview />
    </div>
  );
}

export default Header;
