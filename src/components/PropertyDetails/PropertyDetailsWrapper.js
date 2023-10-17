import React, { useEffect, useState } from "react";
import TopBarWrapper from "../TopBar/TopBarWrapper";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import PropertyDetailsForm from "./PropertyDetailsForm";
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
          <img
            className="property-details__photo-item"
            src={propertyItem.photoLink}
            alt={`img-link-${propertyItem.id}`}
          />
        </div>
        <h2>{propertyItem.title}</h2>
        <div className="property-details__body-container">
          <div className="property-details__left-wrap">
            <ul style={{ listStyleType: "none" }}>
              <li className="property-details_body-item">
                {propertyItem.description}
              </li>
              <li className="property-details_body-item">
                Location: {propertyItem.area}
              </li>
              <li className="property-details_body-item">
                Size: {propertyItem.sqFt}
              </li>
              <li className="property-details_body-item">
                Bedrooms: {propertyItem.bedrooms}
              </li>
            </ul>
          </div>
          <div className="property-details__right-wrap">
            <div className="property-details__contact-form">
              <PropertyDetailsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetailsWrapper;
