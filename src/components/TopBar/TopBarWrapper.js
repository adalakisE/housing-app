import React from "react";

import "./TopBarStyles.scss";
import logo from "../../images/logo.jpg";
import TopBarFilters from "./TopBarFilters";

function TopBarWrapper() {
  return (
    <div className="top-bar__container">
      <div className="top-bar">
        <div className="top-bar__logo-container">
          <img className="top-bar__logo-icon" src={logo} alt="logo" />
          <h3 className="top-bar__logo-text">Fox House</h3>
        </div>
        <input className="top-bar__search-container" placeholder="Search" />
      </div>
      <TopBarFilters />
    </div>
  );
}

export default TopBarWrapper;
