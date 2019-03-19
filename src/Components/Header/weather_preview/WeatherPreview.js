import React, { Component } from 'react'
import './weatherPreview.css'
import { geolocated } from 'react-geolocated'
import WEATHER_API_KEY from './../../../weather_secret'
import $ from 'jquery'

class WeatherPreview extends Component {
  constructor() {
    super()
    this.state = { longitude: '', latitude: '', name: '', temp: '' }
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather() {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${
      this.state.latitude
    }&lon=${this.state.longitude}&units=imperial&APPID=${WEATHER_API_KEY}`
    $.ajax({
      url: weatherURL,
      success: results => {
        //console.log(results)
        this.setState({
          name: results.name,
          temp: Math.round(results.main.temp)
        })
        console.log(this.state)
      }
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      })
      this.getWeather()
    })
  }

  render() {
    return !this.state.name ? null : (
      <div className="weather">
        <p>
          {this.state.name}: {this.state.temp} F &#778;
        </p>
      </div>
    )
  }
}

//export default WeatherPreview

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000,
  watchPosition: true
})(WeatherPreview)
