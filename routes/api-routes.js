const express = require("express");
const router = express.Router();

const axios = require("axios");
require("dotenv").config();

const news_key = process.env.NEWS_API;

router.get("/news/top-news", (req, res) => {
  axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`)
    .then((newsResponse) => res.send(newsResponse.data))
    .catch(() => res.send({ message: "error no articles retrieved" }));
});

module.exports = router;
