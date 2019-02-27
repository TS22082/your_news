import React, { Component } from 'react'
import WEATHER_API_KEY from '../secret'
import $ from 'jquery'

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
    //window.location.href = str2;
    window.open(str2, '_blank')
    console.log('Further information button clicked')
  }

  seeArticlePage(article) {
    window.open(article, '_blank')
    console.log('To article button clicked')
  }

  getNews() {
    var newsRowStyle = {
      paddingLeft: '15%',
      paddingRight: '15%'
    }
    var research = {
      padding: '10px',
      marginTop: '2%',
      backgroundColor: '#2ecc71',
      borderStyle: 'none',
      fontSize: '1.15em',
      color: 'white'
    }
    var source = {
      padding: '10px',
      marginTop: '2%',
      backgroundColor: '#3498db',
      borderStyle: 'none',
      fontSize: '1.15em',
      color: 'white'
    }

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
            <div key={article.publishedAt} style={newsRowStyle}>
              <h3>{article.source.name}</h3>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <button
                style={research}
                onClick={() => this.researchTopic(article.title)}
              >
                Research Topic
              </button>
              <button
                style={source}
                onClick={() => this.seeArticlePage(article.url)}
              >
                To Article
              </button>

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
