import React from "react";
import MapBlock from "./MapBlock";
import "./MapStyles.scss";

function MapWrapper() {
  return (
    <div className="map-wrapper">
      <MapBlock />
    </div>
  );
}

export default MapWrapper;
