import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar/TopBarWrapper";
import ListingsWrapper from "./Listings/ListingsWrapper";
import MapWrapper from "./Map/MapWrapper";
import ComparisonFooter from "./ComparisonFooter/ComparisonFooter";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import LandingPageWrapper from "./LandingPage/LandingPageWrapper";
import "./ViewStyles.scss";

function View() {
  const stateItems = useSelector((state) => state.appReducer.storedItems);
  const currentRoute = useLocation().pathname;

  return (
    <div className="view">
      <div
        className={`loading-layer${
          stateItems?.length || currentRoute === "/" ? "--hidden" : ""
        }`}
      >
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <LandingPageWrapper />
              </>
            }
          ></Route>
          <Route
            path="/mainpage/:id"
            element={
              <>
                <TopBar hasSearch={true} hasFilters={true} />
                <div className="middle-page-wrapper">
                  <ListingsWrapper />
                  <MapWrapper />
                </div>
              </>
            }
          ></Route>
        </Routes>
      </div>
      <LoadingSpinner />
      <ComparisonFooter />
    </div>
  );
}

export default View;
