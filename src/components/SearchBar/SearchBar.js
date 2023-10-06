import React, { useState } from "react";
import Search from "../../api/Icons/search.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeTitle } from "../../redux/actions/toDoActions";
import { storeItems } from "../../redux/actions/toDoActions";
import { fetching } from "../../redux/actions/toDoActions";
import "./SearchBarStyles.scss";

// const URL = "http://localhost:5500"; //nodejs server with 'Simple Web Server' for Windows
const URL = "https://fox-house-backend.onrender.com"; //live serve from Render.com

function SearchBar() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.appReducer);

  const request = {
    price: state.storedPrice,
    size: state.storedSize,
    bedrooms: state.storedBedrooms,
    title: state.storedTitle ? state.storedTitle : "",
  };

  const getListings = async () => {
    dispatch(fetching(true));
    const response = await fetch(
      `${URL}/feed/items?title=${request.title}&price=${request.price}&size=${request.size}&bedrooms=${request.bedrooms}`
    )
      .then((response) => response.json())
      .then((data) => dispatch(storeItems(data.items)))
      .then(() => dispatch(fetching(false)))
      .catch((err) => console.log(err));

    console.log(response);
  };

  function handleChange(e) {
    dispatch(storeTitle(e.target.value));
  }

  return (
    <div className="search-bar__container">
      <input
        value={state.storedTitle}
        className="search-bar__input"
        placeholder="Search"
        onChange={handleChange}
      />
      <Link
        to={`/mainpage/search?title=${request.title}&price=${request.price}&size=${request.size}&bedrooms=${request.bedrooms}`}
        // to="/mainpage"
      >
        <button
          onClick={getListings}
          className="search-bar__search-btn-container"
        >
          <img
            className="search-bar__search-btn-icon"
            src={Search}
            alt="search"
          />
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
