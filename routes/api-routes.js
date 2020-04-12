const express = require("express");
const router = express.Router();

const axios = require("axios");
require("dotenv").config();

const news_key = process.env.NEWS_API;
const weather_key = process.env.WEATHER_API;

router.get("/news/top-news", async (req, res) => {
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`;

  try {
    const newsResults = await axios.get(newsUrl);
    res.send(newsResults.data);
  } catch {
    res.send({ message: "There was an error" });
  }
});

router.get("/weather/by-location", async (req, res) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&units=imperial&APPID=${weather_key}`;

  try {
    const weatherResults = await axios.get(weatherUrl);
    res.send(weatherResults.data);
  } catch {
    res.send({ message: "There was an error" });
  }
});

module.exports = router;
