import React, { Component } from "react";
import "./App.css";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewsFeed />
        <Footer />
      </div>
    );
  }
}

export default App;
