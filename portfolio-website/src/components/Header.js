import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLineLeft"></div>
      <div className="HeaderBracketsContainer">
        <div className="HeaderBrackets"></div>
        <div className="HeaderBracketsShadow">
          <p className="Dots"></p>
        </div>
      </div>
      <div className="HeaderLineRight"></div>
    </div>
  );
};

export default Header;
