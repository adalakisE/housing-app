import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import { useDispatch } from "react-redux";
import { addToComparison } from "../../redux/actions/toDoActions";

function ListingsWrapper() {
  const [list, setList] = useState([]);
  const path = "http://127.0.0.1:8887";

  const getListings = async () => {
    const response = await fetch("http://127.0.0.1:8887/listings.json").then(
      (response) => response.json()
    );
    setList(response);
  };

  //run getListings() when the component loads
  useEffect(() => {
    getListings();
  }, []);

  //dispatch actions to redux
  const dispatch = useDispatch();
  //   const inputRef = useRef(null);
  //   const item = useSelector((state) => state.items);

  const handleAddition = (id) => {
    dispatch(addToComparison(id));
  };

  const items = list.map((item) => (
    <li
      key={item.id}
      className="listings__list"
      onClick={() => handleAddition(item.id)}
    >
      <ListingCard
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
