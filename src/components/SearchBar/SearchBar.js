import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeItems } from "../../redux/actions/toDoActions";
import { fetching } from "../../redux/actions/toDoActions";
import Search from "../../api/Icons/search.png";
import "./SearchBarStyles.scss";

// const URL = "http://localhost:5500"; //nodejs server; can be accessed with Live Server vscode extension
const URL = "https://fox-house-backend.onrender.com"; //live serve from Render.com

function SearchBar() {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams({
    title: "",
  });

  const title = searchParams.get("title");

  const [stateTitle, setStateTitle] = useState(title);

  const location = useLocation();

  const getListings = async () => {
    dispatch(fetching(true));
    const response = await fetch(`${URL}/feed/items${location.search}`)
      .then((response) => response.json())
      .then((data) => dispatch(storeItems(data.items)))
      .then(() => dispatch(fetching(false)))
      .catch((err) => console.log(err));

    return response;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchParams((prev) => {
        prev.set("title", stateTitle);
        return prev;
      });

      // navigate(`/mainpage/search${location.search}`);

      getListings();
    }
  };

  const handleChange = (e) => {
    setStateTitle(e.target.value);
  };

  useEffect(() => {
    if (location.search.length) {
      getListings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="search-bar__container">
      <input
        value={stateTitle}
        className="search-bar__input"
        placeholder="Search"
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      />
      <Link to={`/mainpage/search${location.search}`}>
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
