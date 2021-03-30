require("dotenv").config();
const news_key = process.env.NEWS_API;
const axios = require("axios");

const getNews = async (req, res) => {
  try {
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`;
    const { data } = await axios.get(newsUrl);
    res.send(data);
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = { getNews };
