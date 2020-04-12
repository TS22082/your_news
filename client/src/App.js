import React, { Component } from "react";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewsFeed />
        <Footer />
      </div>
    );
  }
}

export default App;
