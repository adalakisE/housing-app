import React from "react";
import TopBarWrapper from "../TopBar/TopBarWrapper";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Arrow from "../../api/Icons/down-arrow.png";
import "./PropertyDetailsStyles.scss";

function PropertyDetailsWrapper() {
  let { id } = useParams();
  const item = useSelector((state) =>
    state.appReducer.storedItems.find((item) => item.id === parseInt(id))
  );

  const navigate = useNavigate();

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
            src={item.photoLink}
            alt={`img-link-${item.id}`}
          />
          <img
            className="property-details__photo-item"
            src={item.photoLink}
            alt={`img-link-${item.id}`}
          />
        </div>
        <h2>{item?.title}</h2>
        <div className="property-details__body-container">
          <div className="property-details__left-wrap">
            <ul style={{ listStyleType: "none" }}>
              <li className="property-details_body-item">{item.description}</li>
              <li className="property-details_body-item">
                Location: {item.area}
              </li>
              <li className="property-details_body-item">Size: {item.sqFt}</li>
              <li className="property-details_body-item">
                Bedrooms: {item.bedrooms}
              </li>
            </ul>
          </div>
          <div className="property-details__right-wrap"></div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetailsWrapper;
