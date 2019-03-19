import React, { Component } from 'react'
import './Header.css'
import WeatherPreview from './weather_preview/WeatherPreview'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="title">Aggregate News</p>
        <WeatherPreview />
      </div>
    )
  }
}

export default Header
