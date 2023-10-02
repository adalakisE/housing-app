import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar/TopBarWrapper";
import ListingsWrapper from "./Listings/ListingsWrapper";
import MapWrapper from "./Features/MapWrapper";
import ComparisonFooter from "./ComparisonFooter/ComparisonFooter";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import LandingPageWrapper from "./LandingPage/LandingPageWrapper";
import "./ViewStyles.scss";

function View() {
  const stateItems = useSelector((state) => state.storedItems);
  const currentRoute = useLocation().pathname;

  return (
    <div
      className={`view ${
        currentRoute === "/landingpage" ? "view--landing-page" : ""
      }`}
    >
      <div
        className={`loading-layer${
          stateItems.length || currentRoute === "/landingpage" ? "--hidden" : ""
        }`}
      >
        <TopBar />
        <div className="middle-page-wrapper">
          <Routes>
            <Route
              exact
              path="/landingpage"
              element={<LandingPageWrapper />}
            ></Route>
            <Route
              exact
              path="/mainpage"
              element={
                <>
                  <ListingsWrapper />
                  <MapWrapper />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </div>
      <LoadingSpinner />
      <ComparisonFooter />
    </div>
  );
}

export default View;
