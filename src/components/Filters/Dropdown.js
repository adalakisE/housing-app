import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import "./FiltersStyles.scss";

// Reusable Dropdown component
const Dropdown = ({
  label,
  symbol,
  values,
  minSelectedValue,
  maxSelectedValue,
  setMinSelectedValue,
  setMaxSelectedValue,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [useLabel, setUseLabel] = useState(label);

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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setUseLabel(width > 768 ? label : symbol);
      // setUseSymbol(width > 768 ? "" : symbol);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {`  ${
          minSelectedValue !== "From" && maxSelectedValue === "To"
            ? `From ${minSelectedValue} ${symbol}`
            : minSelectedValue === "From" && maxSelectedValue !== "To"
            ? `Up to ${maxSelectedValue} ${symbol}`
            : minSelectedValue !== "From" && maxSelectedValue !== "To"
            ? `${minSelectedValue}-${maxSelectedValue} ${symbol}`
            : useLabel + " From - To"
        }`}
      </Button>
      {isDropdownOpen && (
        <div className="filters__dropdown-container">
          <div className="filters__dropdown">
            <div style={{ marginRight: "10px" }}>
              <input
                value={`${minSelectedValue}  ${symbol}`}
                onChange={() => {}}
                className="filters__dropdown-input"
              />
              {dropdownList(values, setMinSelectedValue)}
            </div>
            -
            <div style={{ marginLeft: "10px" }}>
              <input
                value={`${maxSelectedValue}  ${symbol}`}
                onChange={() => {}}
                className="filters__dropdown-input"
              />
              {dropdownList(values, setMaxSelectedValue)}
            </div>
          </div>
          <Button
            variant="outlined"
            sx={{
              color: "#f29e7e",
              border: "1px solid #f29e7e",
              display: "none", // Initially hide the button
              "@media (max-width: 480px)": {
                display: "block", // Show the button on screens less than 480px wide
              },
              zIndex: 2,
              "&:hover": {
                backgroundColor: "#f29e7e",
                color: "#fff",
                border: "1px solid #f29e7e",
              },
            }}
            onClick={toggleDropdown}
          >
            Confirm
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
