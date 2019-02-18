import React, { Component } from 'react'


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

const research = {
  padding: '10px',
  marginTop: '2%',
  backgroundColor: '#2ecc71',
  borderStyle: 'none',
  fontSize: '1.15em',
  color: 'white'
}
const source = {
  padding: '10px',
  marginTop: '2%',
  backgroundColor: '#3498db',
  borderStyle: 'none',
  fontSize: '1.15em',
  color: 'white'
}

class NewsArticle extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <h3>{this.props.name}</h3>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <button
          style={research}
          onClick={() => this.researchTopic(article.title)}>
          Research Topic
        </button>
        <button
          style={source}
          onClick={() => this.seeArticlePage(article.url)}>
          To Article
        </button>
      </div>
    )
  }
}

export default NewsArticle
