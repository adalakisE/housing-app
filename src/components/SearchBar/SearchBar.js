import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import useFetchItems from "@/hooks/useFetchItems";
import Search from "@/assets/Icons/search.png";
import "./SearchBarStyles.scss";

function SearchBar() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams({ title: "" });
  const [stateTitle, setStateTitle] = useState(searchParams.get("title"));
  const { setParams } = useFetchItems(stateTitle); // Pass stateTitle and an empty object as filters

  const location = useLocation();

  const handleChange = (e) => {
    setStateTitle(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setParams();
    }
  };

  return (
    <div className="search-bar__container">
      <input
        value={stateTitle}
        className="search-bar__input"
        placeholder="Search"
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      />
      {location.pathname === "/" ? (
        <button
          id="search-btn"
          onClick={setParams}
          className="search-bar__search-btn-container"
        >
          <p className="search-bar__search-btn-text--mobile">
            Search Properties
          </p>
          <img
            className="search-bar__search-btn-icon"
            src={Search}
            alt="search"
          />
        </button>
      ) : (
        <button
          id="search-btn"
          onClick={setParams}
          className="search-bar__search-btn-container--main-page"
        >
          <img
            className="search-bar__search-btn-icon"
            src={Search}
            alt="search"
          />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
