import React from "react";
import ListingCard from "./ListingCard";
import { useSelector } from "react-redux";

function ListingsWrapper() {
  const stateItems = useSelector((state) => state.appReducer.filteredItems);

  const items = stateItems.map((item) => (
    <li key={item.id} className="listings__list">
      <ListingCard
        item={item}
        imgSrc={item.photoLink}
        title={item.title}
        description={item.description}
        size={item.sqFt}
        bedroom={item.bedrooms}
        price={item.price}
        area={item.area}
      />
    </li>
  ));

  return (
    <div className="listings__container">
      <ul className="listings__ul">{items}</ul>
    </div>
  );
}

export default ListingsWrapper;
