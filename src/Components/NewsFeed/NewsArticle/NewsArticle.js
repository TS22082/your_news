import React, { Component } from 'react'
import './NewsArticle.css'

export default class NewsArticle extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <button className="researchBtn" onClick={this.props.researchTopic}>
          Research Topic
        </button>
        <button className="articleBtn" onClick={this.props.seeArticlePage}>
          To Article
        </button>
      </div>
    )
  }
}
