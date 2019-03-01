import React, { Component } from 'react'
import './NewsArticle.css'

export default class NewsArticle extends Component {
  researchTopic(topic) {
    var location = `http://www.google.com/search?hl=en&source=hp&q=${topic}&aq=f&oq=&aqi=`
    window.open(location, '_blank')
  }

  seeArticlePage(article) {
    window.open(article, '_blank')
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <button
          className="researchBtn"
          onClick={() => {
            this.researchTopic(this.props.title)
          }}
        >
          Research Topic
        </button>
        <button
          className="articleBtn"
          onClick={() => this.seeArticlePage(this.props.url)}
        >
          To Article
        </button>
      </div>
    )
  }
}
