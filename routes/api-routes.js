const express = require("express");
const router = express.Router();
const { getWeather, getNews } = require("../controllers/");

router.route("/news/top-news").get(getNews);
router.route("/weather/by-location").get(getWeather);

module.exports = router;
