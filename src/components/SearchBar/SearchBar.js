import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeItems } from "../../redux/actions/toDoActions";
import { fetching } from "../../redux/actions/toDoActions";
import Search from "../../api/Icons/search.png";
import Filters from "../Filters/Filters";
import "./SearchBarStyles.scss";

const URL = "http://localhost:5500"; //nodejs server; can be accessed with Live Server vscode extension
// const URL = "http://localhost:8080"; //springboot server
// const URL = "https://fox-house-backend.onrender.com"; //live serve from Render.com

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const storedFilters = useSelector((state) => state.appReducer.storedFilters);

  const [searchParams, setSearchParams] = useSearchParams({
    title: "",
  });

  const title = searchParams.get("title");

  const [stateTitle, setStateTitle] = useState(title);

  const getListings = async () => {
    dispatch(fetching(true));
    // navigate(`/mainpage/search${location.search}`);
    console.log(location.pathname);
    console.log(location.search);

    const response = await fetch(`${URL}/feed/items/${location.search}`)
      .then((response) => response.json())
      .then((data) => dispatch(storeItems(data)))
      .catch((err) => console.log(err));

    dispatch(fetching(false));
    return response;
  };

  const handleChange = (e) => {
    setStateTitle(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setParams();
    }
  };

  const setParams = () => {
    setSearchParams((prev) => {
      prev.set("title", stateTitle);

      if (location.pathname === "/") {
        // navigate(`/mainpage/search?${title}${storedFilters}`);
        // navigate(`/mainpage/search?${prev.toString()}`);
      }
      return prev;
    });
  };

  useEffect(() => {
    if (location.search.length) {
      /** make it run only ONCE when on the start page */
      getListings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, location.search.length]);

  return (
    <div className="search-bar__container">
      <input
        value={stateTitle}
        className="search-bar__input"
        placeholder="Search"
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      />
      <button
        id="search-btn"
        onClick={setParams}
        className="search-bar__search-btn-container"
      >
        <img
          className="search-bar__search-btn-icon"
          src={Search}
          alt="search"
        />
      </button>
    </div>
  );
}

export default SearchBar;
