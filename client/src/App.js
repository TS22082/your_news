import React from "react";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <NewsFeed />
      <Footer />
    </div>
  );
}

export default App;
