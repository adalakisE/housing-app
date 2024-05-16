import { useState, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToComparison,
  removeFromComparison,
} from "../../redux/actions/toDoActions";
import Bed from "../../assets/Icons/bed.png";
import Placeholder from "../../assets/Icons/placeholder.png";
import Area from "../../assets/Icons/area.png";
import Compare from "../../assets/Icons/compare.png";
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
      <Link
        to={`property/${item.id}`}
        style={{ display: "contents", paddingRight: "20px" }}
      >
        <img
          className="listing-card__photo"
          variant="left"
          src={imgSrc}
          alt={`img-alt: ${item.id}`}
        />
      </Link>
      {/* USE THIS FOR MOBILE TEXT ON PHOTO */}
      {/* <div className="listing-card__body-description-mobile">
        <div>{description}</div>
      </div> */}
      <div className="listing-card__body">
        <Link className="listing-card__link" to={`property/${item.id}`}>
          <div className="listing-card__body-title">{title}</div>
          <div className="listing-card__body-description">
            <p className="listing-card__body-description-text">{description}</p>
          </div>
          <div className="listing-card__body-content">
            <ul className="listing-card__body-list-ul">
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
                {Math.round(size / 10.764)}m<sup>2</sup>
              </li>
              <li className="listing-card__body-list-item">
                <img className="icon-area" src={Bed} alt="bed-icon" />
                {bedroom} apartment
              </li>
            </ul>
          </div>
        </Link>
        <div className="listing-card__footer">
          <Link className="listing-card__link" to={`property/${item.id}`}>
            <span className="listing-card__price">
              ${price.toLocaleString("en")}
            </span>
          </Link>
          <div
            className={`${
              stateItems.length < 3 ||
              stateItems.some((storedItem) => item.id === storedItem.id)
                ? "listing-card__comparison"
                : "listing-card__comparison listing-card__comparison--full"
            }`}
            onClick={() => {
              handleClick(item);
            }}
          >
            <span className="listing-card__comparison-text">
              {stateItems.some((storedItem) => item.id === storedItem.id)
                ? "Included in comparison"
                : "Compare"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
