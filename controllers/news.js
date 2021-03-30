require("dotenv").config();

const News = require("../models/newsModel");
const news_key = process.env.NEWS_API;
const axios = require("axios");

const getNews = async (req, res) => {
  try {
    const recordedNews = await News.find();

    if (!recordedNews.length) {
      const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`;
      const { data } = await axios.get(newsUrl);

      const newEntry = new News({
        data: data.articles,
        lastUpdate: Date.now(),
      });

      await newEntry.save();
      res.send(newEntry.data);
    } else if (
      parseInt(Date.now()) - parseInt(recordedNews[0]?.lastUpdate) >
      60000
    ) {
      const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`;
      const { data } = await axios.get(newsUrl);

      const updatedNews = await News.findOne({ _id: recordedNews[0]._id });
      updatedNews.data = data.articles;
      updatedNews.lastUpdate = Date.now();

      await updatedNews.save();
      res.send(updatedNews.data);
    } else {
      res.send(recordedNews[0].data);
    }
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = { getNews };
