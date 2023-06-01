import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";

function MapBlock() {
  const stateItems = useSelector((state) => state.storedItems);
  const dispatch = useDispatch();

  const markersList = stateItems.map((item) => {
    return (
      <Marker position={[item.latitude, item.longitude]} key={item.id}>
        <Tooltip direction="top">
          <img
            className="map__marker-photo"
            src={item.photoLink}
            alt="markerphoto"
          />
          <div>
            <span>${item.price} </span>
            <span> {item.sqFt / 10}m2</span>
          </div>
        </Tooltip>
      </Marker>
    );
  });

  return (
    <div className="map__container">
      <MapContainer
        center={[37.9645, 23.7229]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[37.9645, 23.7229]}></Marker> */}
        {markersList}
      </MapContainer>
    </div>
  );
}

export default MapBlock;
