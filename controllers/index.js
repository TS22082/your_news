require("dotenv").config();
const weather_key = process.env.WEATHER_API;
const axios = require("axios");
const news_key = process.env.NEWS_API;

const getWeather = async (req, res) => {
  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&units=imperial&APPID=${weather_key}`;
    const weatherResults = await axios.get(weatherUrl);
    res.send(weatherResults.data);
  } catch (err) {
    res.send({ errror: err });
  }
};

const getNews = async (req, res) => {
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`;

  try {
    const newsResults = await axios.get(newsUrl);
    res.send(newsResults.data);
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = { getWeather, getNews };
