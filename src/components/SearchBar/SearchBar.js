import React from "react";
import "./SearchBarStyles.scss";

function SearchBar() {
  return (
    <div className="search-bar__container">
      <input className="search-bar__input" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
