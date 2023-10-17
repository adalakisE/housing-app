import React, { useEffect, useState } from "react";
import TopBarWrapper from "../TopBar/TopBarWrapper";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import PropertyDetailsForm from "./PropertyDetailsForm";
import MapWrapper from "../Map/MapWrapper";
import Arrow from "../../api/Icons/down-arrow.png";
import "./PropertyDetailsStyles.scss";

function PropertyDetailsWrapper() {
  const [propertyItem, setPropertyItem] = useState("");

  let { id } = useParams();
  let item = useSelector((state) =>
    state.appReducer.storedItems.find((item) => item.id === parseInt(id))
  );

  const URL = "http://localhost:5500";

  const navigate = useNavigate();

  const getItem = async () => {
    item = await fetch(`${URL}/feed/item?id=${id}`)
      .then((response) => response.json())
      .then((item) => setPropertyItem(item))
      .catch((err) => console.log(err));

    console.log(propertyItem);
  };

  useEffect(() => {
    if (!item?.id) {
      getItem();
    } else {
      setPropertyItem(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <>
      <TopBarWrapper />
      <div className="property-details__back-btn" onClick={() => navigate(-1)}>
        <img className="property-details__icon-arrow" src={Arrow} alt="arrow" />
      </div>
      <div className="property-details__container">
        <div className="property-details__photo-container">
          <img
            className="property-details__photo-item"
            src={propertyItem.photoLink}
            alt={`img-link-${propertyItem.id}`}
          />
          <div className="property-details__photo-container-thumbnails">
            <img
              className="property-details__photo-thumbnail-item"
              src={propertyItem.photoLink}
              alt={`img-link-${propertyItem.id}`}
            />
            <img
              className="property-details__photo-thumbnail-item"
              src={propertyItem.photoLink}
              alt={`img-link-${propertyItem.id}`}
            />
            <img
              className="property-details__photo-thumbnail-item"
              src={propertyItem.photoLink}
              alt={`img-link-${propertyItem.id}`}
            />
            <img
              className="property-details__photo-thumbnail-item"
              src={propertyItem.photoLink}
              alt={`img-link-${propertyItem.id}`}
            />
          </div>
        </div>
        <h2 style={{ left: "0" }}>{propertyItem.title}</h2>
        <div className="property-details__body-container">
          <div className="property-details__left-wrap">
            <ul style={{ listStyleType: "none" }}>
              <li className="property-details__body-description">
                {propertyItem.description}
              </li>
              <table className="property-details__body-table">
                <tr>
                  <td className="property-details__body-td">Location:</td>
                  <td className="property-details__body-td">
                    {propertyItem.area}
                  </td>
                </tr>

                <tr>
                  <td className="property-details__body-td">Size:</td>
                  <td className="property-details__body-td">
                    {propertyItem.sqFt}
                  </td>
                </tr>

                <tr>
                  <td className="property-details__body-td">Bedrooms:</td>
                  <td className="property-details__body-td">
                    {propertyItem.bedrooms}
                  </td>
                </tr>
              </table>
            </ul>
          </div>
          <div className="property-details__right-wrap">
            <div className="property-details__contact-form">
              <PropertyDetailsForm />
            </div>
          </div>
        </div>
      </div>
      <div className="property-details__map-container">
        <MapWrapper />
      </div>
    </>
  );
}

export default PropertyDetailsWrapper;
