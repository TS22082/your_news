import React, { Component } from 'react'
import './App.css'
import NewsFeed from './Components/NewsFeed'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    var headerStyle = {
      color: 'white',
      fontSize: '1.25em',
      backgroundColor: 'dimgray',
      paddingLeft: '10px'
    }
    var footerStyle = {
      marginTop: '10px',
      color: 'white',
      display: 'grid',
      gridTemplateColumns: '1fr',
      alignItems: 'center',
      backgroundColor: 'black'
    }
    var newsApiStyle = {
      textDecoration: 'none',
      color: '#2ecc71'
    }
    var gitHubStyle = {
      textDecoration: 'none',
      color: '#3498db'
    }
    return (
      <div className="App">
        <div style={headerStyle}>
          <p>The Your_News Project</p>
        </div>
        <NewsFeed />
        <div style={footerStyle}>
          <p style={{ textAlign: 'center' }}>
            Powered by{' '}
            <a style={newsApiStyle} href="https://newsapi.org/">
              newsapi.org
            </a>{' '}
            and{' '}
            <a style={gitHubStyle} href="https://github.com/TS22082/your_news">
              open sourced
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default App
