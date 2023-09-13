import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import { useDispatch, useSelector } from "react-redux";
import { filteredItems, storeItems } from "../../redux/actions/toDoActions";

function ListingsWrapper() {
  const [list, setList] = useState([]);

  //use the local URL if you don't want to run the server
  // you need 'Web Server for chrome' running in both scenarios
  // const URL = "http://127.0.0.1:8887"; //local URL,
  // const URL = "http://127.0.0.1:3030"; //nodejs server URL, you need the nodejs server running
  const URL = "https://fox-house-backend.onrender.com"; //live serve from Render.com

  const dispatch = useDispatch();

  const getListings = async () => {
    const response = await fetch(`${URL}/listings.json`)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    setList(response);
    console.log(list);
    dispatch(storeItems(response));
    dispatch(filteredItems(response));
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
