import React from "react";
import "./Header.css";
import Weather from "../Weather/Weather";

function Header() {
  return (
    <>
      <div className="header">
        <h3 className="title">Aggregate News</h3>
        <Weather />
      </div>
      <div className="hr" />
    </>
  );
}

export default Header;
