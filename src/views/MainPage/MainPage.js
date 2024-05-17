import React from "react";
import TopBar from "@/components/TopBar/TopBarWrapper";
import ListingsWrapper from "@/components/Listings/ListingsWrapper";
import MapWrapper from "@/components/Map/MapWrapper";
import ComparisonFooter from "@/components/ComparisonFooter/ComparisonFooter";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
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
