import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import { useDispatch, useSelector } from "react-redux";
import { filteredItems, storeItems } from "../../redux/actions/toDoActions";

function ListingsWrapper() {
  const [list, setList] = useState([]);
  const path = "http://127.0.0.1:8887";

  // const storedItems = useSelector((state) => state.storedItems)
  const dispatch = useDispatch();

  const getListings = async () => {
    const response = await fetch(`${path}/listings.json`).then((response) =>
      response.json()
    );
    setList(response);
    dispatch(storeItems(response));
    dispatch(filteredItems(response));
  };

  //run getListings() when the component loads
  useEffect(() => {
    getListings();
  }, []);

  const stateItems = useSelector((state) => state.filteredItems);

  const items = stateItems.map((item) => (
    <li key={item.id} className="listings__list">
      <ListingCard
        item={item}
        imgSrc={`${path}/ListingImages/item${item.id}.webp`}
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
