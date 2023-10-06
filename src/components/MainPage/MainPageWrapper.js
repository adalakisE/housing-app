import React from "react";
import TopBar from "../TopBar/TopBarWrapper";
import ListingsWrapper from "../Listings/ListingsWrapper";
import MapWrapper from "../Map/MapWrapper";
import ComparisonFooter from "../ComparisonFooter/ComparisonFooter";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import "./MainPageStyles.scss";

function MainPageWrapper() {
  const stateItems = useSelector((state) => state.appReducer.storedItems);

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
