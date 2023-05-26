import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function MapBlock() {
  return (
    <div className="map__container">
      <MapContainer
        center={[37.9645, 23.7229]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapBlock;
