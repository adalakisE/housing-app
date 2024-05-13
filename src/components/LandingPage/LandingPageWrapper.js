import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import "./LandingPageStyles.scss";

function LandingPageWrapper() {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <SearchBar />
        <Filters autoSearch={false} isVisible={true} />
      </div>
    </div>
  );
}

export default LandingPageWrapper;
