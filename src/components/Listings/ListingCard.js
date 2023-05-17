import React from "react";
import "./ListingsStyles.scss";

function ListingCard({
  imgSrc,
  title,
  description,
  size,
  bedroom,
  price,
  area,
}) {
  const path = "http://127.0.0.1:8887/Icons/";

  return (
    <div className="listing-card__container">
      <img
        className="listing-card__photo"
        variant="left"
        src={imgSrc}
        alt={imgSrc}
      />
      <div className="listing-card__body">
        <div className="listing-card__body-title">{title}</div>
        <div className="listing-card__body-description">
          <span>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ paddingBottom: "10px" }}>{description}</li>
              <li className="listing-card__body-list-item">
                <img
                  className="icon-area"
                  src={`${path}placeholder.png`}
                  alt="placeholder-icon"
                />
                {area}
              </li>
              <li>
                <img
                  className="icon-area"
                  src={`${path}area.png`}
                  alt="area-icon"
                />
                {size / 10}m<sup>2</sup>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <img
                  className="icon-area"
                  src={`${path}bed.png`}
                  alt="bed-icon"
                />
                {bedroom} apartment
              </li>
              <li style={{ fontSize: "20px", fontWeight: "bold" }}>{price}</li>
            </ul>
          </span>
        </div>
        <div className="listing-card__comparison">
          <div className="listing-card__comparison-container">
            <p className="listing-card__comparison-container-text">
              Include in comparison
            </p>
            <img
              className="icon-area"
              src={`${path}compare.png`}
              alt="bed-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
