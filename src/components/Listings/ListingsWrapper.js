import React, { useEffect } from "react";
import ListingCard from "./ListingCard";
import { useDispatch, useSelector } from "react-redux";
import { filteredItems, storeItems } from "../../redux/actions/toDoActions";

function ListingsWrapper() {
  const URL = "http://localhost:3030"; //nodejs server with 'Simple Web Server' for Windows
  // const URL = "https://fox-house-backend.onrender.com"; //live serve from Render.com

  const dispatch = useDispatch();

  const getListings = async () => {
    const response = await fetch(`${URL}/listings`)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    if (response?.length) {
      dispatch(storeItems(response));
      dispatch(filteredItems(response));
    }
  };

  //runs getListings() when the component loads
  useEffect(() => {
    getListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stateItems = useSelector((state) => state.filteredItems);

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
