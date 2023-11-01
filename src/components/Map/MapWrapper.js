import React from "react";
import MapBlock from "./MapBlock";
import "./MapStyles.scss";

function MapWrapper({ stateItems }) {
  return (
    <div className="map-wrapper">
      <MapBlock stateItems={stateItems} />
    </div>
  );
}

export default MapWrapper;
