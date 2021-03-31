require("dotenv").config();

const News = require("../models/newsModel");
const news_key = process.env.NEWS_API;
const axios = require("axios");

const getNews = async (req, res) => {
  try {
    const recordedNews = await News.find();

    // if there is nothing in the array add articles to mongodb
    if (!recordedNews.length) {
      const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`;
      const { data } = await axios.get(newsUrl);

      const newEntry = new News({
        data: data.articles,
        lastUpdate: Date.now(),
      });

      await newEntry.save();
      return res.send(newEntry.data);
    }

    // if the request is happening after a minute since the last request it will make a new request,
    // update the db, and send back the request
    if (parseInt(Date.now()) - parseInt(recordedNews[0]?.lastUpdate) > 60000) {
      const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_key}`;
      const { data } = await axios.get(newsUrl);

      const updatedNews = await News.findOne({ _id: recordedNews[0]._id });
      updatedNews.data = data.articles;
      updatedNews.lastUpdate = Date.now();

      await updatedNews.save();
      return res.send(updatedNews.data);
    }

    // if it makes it through the checks above it will return articles from db
    res.send(recordedNews[0].data);
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = { getNews };
