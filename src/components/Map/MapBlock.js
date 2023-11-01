import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

function MapBlock({ stateItems }) {
  let totalLatitude = 0;
  let totalLongitude = 0;

  stateItems?.forEach((item) => {
    totalLatitude += item.latitude;
    totalLongitude += item.longitude;
  });

  const centerLatitude = totalLatitude / stateItems.length;
  const centerLongitude = totalLongitude / stateItems.length;

  const markersList = stateItems?.map((item) => {
    return (
      <Marker position={[item.latitude, item.longitude]} key={item.id}>
        <Tooltip direction="top">
          <div className="map__marker-container">
            <img
              className="map__marker-photo"
              src={item.photoLink}
              alt="markerphoto"
            />
            <div className="map__marker-content-container">
              <div className="map__marker-content-items">
                <span> {item.area}</span>
                <span> {item.sqFt / 10}m2</span>
                <span> {item.bedrooms} bedroom</span>
                <h6>${item.price} </h6>
              </div>
            </div>
          </div>
        </Tooltip>
      </Marker>
    );
  });

  return (
    <div className="map__container">
      <MapContainer
        center={[centerLatitude, centerLongitude]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markersList}
      </MapContainer>
    </div>
  );
}

export default MapBlock;
