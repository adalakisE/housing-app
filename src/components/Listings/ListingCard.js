import { useState, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToComparison,
  removeFromComparison,
} from "../../redux/actions/toDoActions";
import Bed from "../../api/Icons/bed.png";
import Placeholder from "../../api/Icons/placeholder.png";
import Area from "../../api/Icons/area.png";
import Compare from "../../api/Icons/compare.png";
import "./ListingsStyles.scss";

function ListingCard({
  item,
  imgSrc,
  title,
  description,
  size,
  bedroom,
  price,
  area,
}) {
  let [inComparison, setInComparison] = useState(false);

  const stateItems = useSelector((state) => state.appReducer.itemsInComparison);
  const dispatch = useDispatch();

  const handleClick = (clickedItem) => {
    if (stateItems.some((item) => item === clickedItem)) {
      dispatch(removeFromComparison(clickedItem));
    } else {
      dispatch(addToComparison(item));
    }
    setInComparison((inComparison = !inComparison));
  };

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
          <ul style={{ listStyleType: "none" }}>
            <li style={{ paddingBottom: "10px" }}>
              <div>{description}</div>
            </li>
            <li className="listing-card__body-list-item">
              <img
                className="icon-area"
                src={Placeholder}
                alt="placeholder-icon"
              />
              {area}
            </li>
            <li className="listing-card__body-list-item">
              <img className="icon-area" src={Area} alt="area-icon" />
              {size / 10}m<sup>2</sup>
            </li>
            <li
              className="listing-card__body-list-item"
              style={{ paddingBottom: "10px" }}
            >
              <img className="icon-area" src={Bed} alt="bed-icon" />
              {bedroom} apartment
            </li>
            <div className="listing-card__footer">
              <span className="listing-card__price">
                ${price.toLocaleString("en")}
              </span>
              <div
                className={`${
                  stateItems.length < 3 ||
                  stateItems.some((storedItem) => item.id === storedItem.id)
                    ? "listing-card__comparison"
                    : "listing-card__comparison listing-card__comparison--full"
                }`}
                onClick={() => handleClick(item)}
              >
                <span className="listing-card__comparison-text">
                  {stateItems.some((storedItem) => item.id === storedItem.id)
                    ? "Included in comparison"
                    : "Compare"}
                </span>
                <img className="icon-area" src={Compare} alt="bed-icon" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
