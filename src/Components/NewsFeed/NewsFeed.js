import React, { Component } from 'react'
import WEATHER_API_KEY from '../../secret'
import $ from 'jquery'
import './NewsFeed.css'
import NewsArticle from './NewsArticle/NewsArticle'

class NewsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getNews = this.getNews.bind(this)
  }

  componentDidMount() {
    this.getNews()
  }

  researchTopic(topic) {
    var str2 =
      'http://www.google.com/search?hl=en&source=hp&q=' +
      topic +
      '&aq=f&oq=&aqi='
    window.open(str2, '_blank')
    console.log('Further information button clicked')
  }

  seeArticlePage(article) {
    window.open(article, '_blank')
    console.log('To article button clicked')
  }

  getNews() {
    const API_KEY = WEATHER_API_KEY
    const urlString =
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY
    $.ajax({
      url: urlString,
      success: searchResults => {
        const results = searchResults.articles
        var newsRows = []

        results.forEach((article, index) => {
          console.log(article)
          const newsRow = (
            <div key={article.publishedAt} className="newsRow">
              <NewsArticle
                name={article.source.name}
                title={article.title}
                description={article.description}
                researchTopic={() => this.researchTopic(article.title)}
                seeArticlePage={() => this.seeArticlePage(article.url)}
              />
              {index !== results.length - 1 ? <hr /> : null}
            </div>
          )
          newsRows.push(newsRow)
        })
        this.setState({ rows: newsRows })
      },
      error: (xhr, status, err) => {
        console.error('Error fetching data')
      }
    })
  }

  render() {
    return <div>{this.state.rows}</div>
  }
}

export default NewsFeed
