import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useSelector } from "react-redux";

function MapBlock() {
  const stateItems = useSelector((state) => state.appReducer.storedItems);
  const [centerMarker, setCenterMarker] = useState({ x: 0, y: 0 });

  const markersList = stateItems?.map((item) => {
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

  const calculateCenter = () => {
    const center = { x: 0, y: 0 };

    stateItems?.forEach((el) => {
      // console.log(center);
      center.x += el.latitude;
      center.y += el.longitude;
    });
    console.log(center);
    center.x = center.x / stateItems.length;
    center.y = center.y / stateItems.length;
    // console.log(center);
    setCenterMarker({ x: 30, y: 29 });

    // console.log(`center is: ${centerMarker.x}, ${centerMarker.y}`);
  };

  // function SetViewOnClick({ coords }) {
  //   const map = useMap();
  //   map.setView(coords, map.getZoom());

  //   return null;
  // }

  useEffect(() => {
    calculateCenter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateItems]);

  return (
    <div className="map__container">
      <MapContainer center={[38.0472, 23.798]} zoom={13} scrollWheelZoom={true}>
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
