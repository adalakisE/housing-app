import React, { useEffect } from "react";
import { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsWrapper() {
  const [list, setList] = useState([]);
  const [compare, setCompare] = useState(0);
  const path = "http://127.0.0.1:8887";

  const getListings = async () => {
    const response = await fetch("http://127.0.0.1:8887/listings.json").then(
      (response) => response.json()
    );
    setList(response);
  };

  const clickedCompare = () => {
    setCompare(1);
  };

  //run getListings() when the component loads
  useEffect(() => {
    getListings();
  }, []);

  const items = list.map((item) => (
    <li key={item.id} className="listings__list">
      <ListingCard
        imgSrc={`${path}/ListingImages/item${item.id}.webp`}
        title={item.title}
        description={item.description}
        size={item.sqFt}
        bedroom={item.bedrooms}
        price={item.price}
        area={item.area}
        clickedCompare={clickedCompare}
      />
    </li>
  ));

  return (
    <div className="listings__container">
      <ul className="listings__ul">{items}</ul>
      compare is: {compare}
    </div>
  );
}

export default ListingsWrapper;
