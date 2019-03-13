import React, { Component } from 'react'
import WEATHER_API_KEY from '../../secret'
import $ from 'jquery'
import './NewsFeed.css'
import NewsArticle from './NewsArticle/NewsArticle'
import Loading from './Loading/Loading'

class NewsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.getNews = this.getNews.bind(this)
  }

  componentDidMount() {
    this.getNews()
  }

  getNews() {
    const API_KEY = WEATHER_API_KEY
    const urlString = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    $.ajax({
      url: urlString,
      success: searchResults => {
        const results = searchResults.articles
        var newsRows = []

        results.forEach((article, index) => {
          const newsRow = (
            <div key={article.publishedAt} className="newsRow">
              <NewsArticle
                name={article.source.name}
                title={article.title}
                description={article.description}
                url={article.url}
              />
              {index !== results.length - 1 ? (
                <hr />
              ) : (
                <div className="lastRow" />
              )}
            </div>
          )
          newsRows.push(newsRow)
        })
        this.setState({ rows: newsRows, loading: false })
      },
      error: (xhr, status, err) => {
        console.error('Error fetching data')
      }
    })
  }

  render() {
    return this.state.loading ? <Loading /> : <div>{this.state.rows}</div>
  }
}

export default NewsFeed
