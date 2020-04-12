import $ from "jquery";
import React, { Component } from "react";

import Loading from "./Loading/Loading";
import NewsArticle from "./NewsArticle/NewsArticle";

import "./NewsFeed.css";
import axios from "axios";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.getNews = this.getNews.bind(this);
  }

  componentDidMount() {
    this.getNews();
  }

  //   <NewsArticle
  //   name={article.source.name}
  //   title={article.title}
  //   description={article.description}
  //   url={article.url}
  // />

  getNews() {
    axios.get("/news/top-news").then((newsResponse) => {
      console.log(newsResponse.data);
    });
  }

  render() {
    return this.state.loading ? <Loading /> : <div>{this.state.rows}</div>;
  }
}

export default NewsFeed;
