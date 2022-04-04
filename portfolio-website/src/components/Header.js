import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLineLeft"></div>
      <div className="HeaderCircleContainer">
        <div className="HeaderCircle" />
        <div className="CircleShadowsContainer">
          <div className="HeaderCircleShadowTop"></div>
          <div className="HeaderCircleShadowBottomContainer">
            <div className="HeaderCircleShadowBottom"></div>
          </div>
        </div>
      </div>
      <div className="HeaderLineRight"></div>
    </div>
  );
};

export default Header;
