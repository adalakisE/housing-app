import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";

import "./FiltersStyles.scss";

// Reusable Dropdown component
const Dropdown = ({
  label,
  values,
  minSelectedValue,
  maxSelectedValue,
  setMinSelectedValue,
  setMaxSelectedValue,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(0);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeOpenMenus = (e) => {
    if (isDropdownOpen && !dropdownRef.current?.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  const dropdownList = (valuesList, value) => {
    return (
      <ul className="filters__dropdown-list">
        {valuesList.map((item) => {
          return (
            <li
              onClick={(e) => {
                value(e.target.innerHTML);
              }}
              className="filters__dropdown-list-item"
              key={item.id}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div ref={dropdownRef} className="filters__container">
      <Button
        variant="outlined"
        sx={{
          color: "#f29e7e",
          border: "1px solid #f29e7e",
          "&:hover": {
            backgroundColor: "#f29e7e",
            color: "#fff",
            border: "1px solid #f29e7e",
          },
        }}
        onClick={toggleDropdown}
      >
        {`${label}: ${minSelectedValue} - ${maxSelectedValue}`}
      </Button>
      {isDropdownOpen && (
        <div
          className="filters__dropdown-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            backgroundColor: "white",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <input
              value={minSelectedValue}
              onChange={() => {}}
              className="filters__dropdown-input"
            />
            {dropdownList(values, setMinSelectedValue)}
          </div>
          -
          <div style={{ marginLeft: "10px" }}>
            <input
              value={maxSelectedValue}
              onChange={() => {}}
              className="filters__dropdown-input"
            />
            {dropdownList(values, setMaxSelectedValue)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
