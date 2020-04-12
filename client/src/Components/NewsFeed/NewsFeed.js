import $ from "jquery";
import React, { Component, useState, useEffect } from "react";

import Loading from "./Loading/Loading";
import NewsArticle from "./NewsArticle/NewsArticle";

import "./NewsFeed.css";
import axios from "axios";

function NewsFeed() {
  const [loading, setLoading] = useState(true);
  const [newsArticles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("/news/top-news").then((newsResponse) => {
      setArticles(newsResponse.data.articles);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="newsContainer">
      {newsArticles.map((article) => (
        <NewsArticle
          name={article.source.name}
          title={article.title}
          description={article.description}
          url={article.url}
        />
      ))}
    </div>
  );
}

export default NewsFeed;
