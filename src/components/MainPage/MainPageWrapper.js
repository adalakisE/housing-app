import React from "react";
import TopBar from "../TopBar/TopBarWrapper";
import ListingsWrapper from "../Listings/ListingsWrapper";
import MapWrapper from "../Map/MapWrapper";
import ComparisonFooter from "../ComparisonFooter/ComparisonFooter";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./MainPageStyles.scss";

function MainPageWrapper() {
  return (
    <div className="main-page">
      <div className="main-page--hidden">
        <TopBar />
        <div className="main-page__middle-page-wrapper">
          <ListingsWrapper />
          <MapWrapper />
        </div>
        <ComparisonFooter />
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default MainPageWrapper;
