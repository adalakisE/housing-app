import React from "react";
import TopBar from "./TopBar/TopBarWrapper";
import Listings from "./Listings/ListingsWrapper";
import MapWrapper from "./Features/MapWrapper";
import ComparisonFooter from "./Listings/ComparisonFooter/ComparisonFooter";
import "./ViewStyles.scss";

function View() {
  return (
    <div className="view">
      <TopBar />
      <div className="middle-page-wrapper">
        <Listings />
        <MapWrapper />
      </div>
      <ComparisonFooter />
    </div>
  );
}

export default View;
