import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./LandingPageStyles.scss";
import Filters from "../Filters/Filters";

function LandingPageWrapper() {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <SearchBar />
        <Link to="/mainpage">
          <button className="landing-page__btn">Search</button>
        </Link>
        <Filters />
      </div>
    </div>
  );
}

export default LandingPageWrapper;
