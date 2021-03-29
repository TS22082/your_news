import React from "react";

import "./footer.css";

function Footer() {
  return (
    <>
      <div className="hr" />
      <div className="footer">
        <p>
          Powered by{" "}
          <a className="newsApi" href="https://newsapi.org/">
            newsapi.org
          </a>
          {",  "}
          <a className="openWeather" href="https://openweathermap.org/">
            open weather map
          </a>{" "}
          and{" "}
          <a className="github" href="https://github.com/TS22082/your_news">
            open sourced
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
