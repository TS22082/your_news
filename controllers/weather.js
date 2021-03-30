require("dotenv").config();
const weather_key = process.env.WEATHER_API;
const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&units=imperial&APPID=${weather_key}`;
    const { data } = await axios.get(weatherUrl);
    res.json(data);
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = { getWeather };
