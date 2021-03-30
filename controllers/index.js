require("dotenv").config();

const { getWeather } = require("./weather");
const { getNews } = require("./news");

module.exports = { getWeather, getNews };
