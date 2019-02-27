import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          Powered by{' '}
          <a className="newsApi" href="https://newsapi.org/">
            newsapi.org
          </a>{' '}
          and{' '}
          <a className="github" href="https://github.com/TS22082/your_news">
            open sourced
          </a>
        </p>
      </div>
    )
  }
}

export default Footer
