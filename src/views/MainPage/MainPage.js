import React from "react";
import TopBar from "src/components/TopBar/TopBarWrapper";
import ListingsWrapper from "src/components/Listings/ListingsWrapper";
import MapWrapper from "src/components/Map/MapWrapper";
import ComparisonFooter from "src/components/ComparisonFooter/ComparisonFooter";
import LoadingSpinner from "src/components/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import "./MainPageStyles.scss";

function MainPageView() {
  const stateItems = useSelector((state) => state.appReducer.storedItems);

  return (
    <div className="main-page">
      {/* fix this class */}
      <div className="main-page--hidden">
        <TopBar autoSearch={true} isFiltersVisible={true} />
        <div className="main-page__middle-page-wrapper">
          <ListingsWrapper />
          {stateItems.length ? <MapWrapper stateItems={stateItems} /> : <></>}
        </div>
        <ComparisonFooter />
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default MainPageView;
