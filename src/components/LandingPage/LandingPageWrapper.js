import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./LandingPageStyles.scss";

function LandingPageWrapper() {
  return (
    <div className="landing-page">
      <SearchBar />
      <Link to="/mainpage">
        <button>Search</button>
      </Link>
    </div>
  );
}

export default LandingPageWrapper;
