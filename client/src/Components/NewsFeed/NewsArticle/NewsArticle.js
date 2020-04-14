import React from "react";
import "./NewsArticle.css";

function NewsArticle(props) {
  function researchTopic(topic) {
    var location = `http://www.google.com/search?hl=en&source=hp&q=${topic}&aq=f&oq=&aqi=`;
    window.open(location, "_blank");
  }

  function seeArticlePage(article) {
    window.open(article, "_blank");
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <button
        className="researchBtn"
        onClick={() => {
          researchTopic(props.title);
        }}
      >
        Research Topic
      </button>
      <button className="articleBtn" onClick={() => seeArticlePage(props.url)}>
        To Article
      </button>
    </div>
  );
}

export default NewsArticle;
