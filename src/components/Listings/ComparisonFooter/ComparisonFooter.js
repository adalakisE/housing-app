import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromComparison } from "../../../redux/actions/toDoActions";
import "./ComparisonFooterStyles.scss";

function ComparisonFooter() {
  const items = useSelector((state) => state.itemsInComparison);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromComparison(id));
  };

  const itemsList = items.map((item) => (
    <li
      key={item}
      className="comparison-footer__list-item"
      onClick={() => handleDelete(item)}
    >
      {item}
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
