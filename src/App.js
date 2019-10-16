import React, { Component } from 'react';
import './App.css';
import NewsFeed from './Components/NewsFeed/NewsFeed';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Jokes from './Components/Jokes/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jokes />
        <NewsFeed />
        <Footer />
      </div>
    );
  }
}

export default App;
