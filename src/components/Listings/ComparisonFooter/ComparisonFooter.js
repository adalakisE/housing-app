import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromComparison } from "../../../redux/actions/toDoActions";
import "./ComparisonFooterStyles.scss";

function ComparisonFooter() {
  const stateItems = useSelector((state) => state.itemsInComparison);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(removeFromComparison(item));
  };

  const itemsList = stateItems.map((item) => (
    <li
      key={item.id}
      className="comparison-footer__list-item"
      onClick={() => handleDelete(item)}
    >
      {item.id}
    </li>
  ));

  return (
    <div className="comparison-footer">
      ComparisonFooter
      <ul className="comparison-footer__list-container">{itemsList}</ul>
    </div>
  );
}

export default ComparisonFooter;
