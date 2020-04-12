const express = require("express");
const router = express.Router();

const axios = require("axios");
require("dotenv").config();

const news_key = process.env.NEWS_API;
const weather_key = process.env.WEATHER_API;

router.get("/news/top-news", (req, res) => {
  axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`)
    .then((newsResponse) => res.send(newsResponse.data))
    .catch(() => res.send({ message: "error no articles retrieved" }));
});

router.get("/weather/by-location", async (req, res) => {
  const weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    req.query.lat +
    "&lon=" +
    req.query.lon +
    "&units=imperial&APPID=" +
    weather_key;

  try {
    const weatherResults = await axios.get(weatherUrl);
    res.send(weatherResults.data);
  } catch {
    res.send({ message: "There was an error" });
  }
});

module.exports = router;
