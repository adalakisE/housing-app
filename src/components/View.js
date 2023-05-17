import React from "react";
import TopBar from "./TopBar/TopBarWrapper";
import Listings from "./Listings/ListingsWrapper";
import Features from "./Features/FeaturesWrapper";
import ComparisonFooter from "./Listings/ComparisonFooter";
import "./ViewStyles.scss";

function View() {
  return (
    <div className="view">
      <TopBar />
      <div className="middle-page-wrapper">
        <Listings />
        <Features />
      </div>
      <ComparisonFooter />
    </div>
  );
}

export default View;
