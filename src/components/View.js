import React from "react";
import TopBar from "./TopBar/TopBarWrapper";
import Listings from "./Listings/ListingsWrapper";
import MapWrapper from "./Features/MapWrapper";
import ComparisonFooter from "./ComparisonFooter/ComparisonFooter";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import "./ViewStyles.scss";

function View() {
  const stateItems = useSelector((state) => state.storedItems);

  return (
    <div className="view">
      <div className={`loading-layer${stateItems.length ? "--hidden" : ""}`}>
        <TopBar />
        <div className="middle-page-wrapper">
          <Listings />
          <MapWrapper />
        </div>
      </div>
      <LoadingSpinner />
      <ComparisonFooter />
    </div>
  );
}

export default View;
