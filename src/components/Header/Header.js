import React from "react";
import VVill from "../../assets/VVill.png";
import "./header.css";

export const Header = () => {
  return (
    <div className="header-container" id="home">
      <div className="header-section">
        <div className="header-font">
          <p>Hi, my name is</p>
          <h1>Will Bowles.</h1>
          <p>I’m a software engineer based in New York City.</p>
        </div>
        <div>
          <img src={VVill} alt="will bowles" className="header-image" />
        </div>
      </div>
    </div>
  );
};
