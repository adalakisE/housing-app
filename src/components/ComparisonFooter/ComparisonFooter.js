import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromComparison } from "../../redux/actions/toDoActions";
import "./ComparisonFooterStyles.scss";
import Close from "../../assets/Icons/close.png";
import Arrow from "../../assets/Icons/down-arrow.png";

function ComparisonFooter() {
  const stateItems = useSelector((state) => state.appReducer.itemsInComparison);
  const dispatch = useDispatch();

  const [expand, setExpand] = useState(false);

  const handleDelete = (item) => {
    dispatch(removeFromComparison(item));
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  let itemsList = [];

  if (Object.keys(stateItems)?.length !== 0) {
    itemsList = stateItems.map((item) => (
      <li key={item.id} className="comparison-footer__list-item">
        <div className="comparison-footer__left-container">
          <img
            className="comparison-footer__list-photo"
            src={item.photoLink}
            alt="house"
          />
          <div className="comparison-footer__list-body">
            <p style={{ fontWeight: "600" }}>
              {item.title} ({item.id})
            </p>
            <p>{item.area}</p>
            <p style={{ fontWeight: "bold" }}>${item.price}</p>
          </div>
        </div>
        <div className="comparison-footer__list-remove-container">
          <img
            className="icon-area-close"
            src={Close}
            alt="close"
            onClick={() => handleDelete(item)}
          />
        </div>
      </li>
    ));

    return (
      <div
        className={`${
          expand
            ? "comparison-footer comparison-footer--expanded"
            : "comparison-footer"
        }`}
      >
        <div className="comparison-footer__expand-container">
          <img
            className={`${
              expand
                ? "icon-area-arrow icon-area-arrow--expanded"
                : "icon-area-arrow"
            }`}
            src={Arrow}
            alt="expand"
            onClick={() => handleExpand()}
          />
        </div>
        <ul className="comparison-footer__list-container">{itemsList}</ul>
      </div>
    );
  } else return <div></div>;
}

export default ComparisonFooter;
