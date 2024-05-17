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
  // eslint-disable-next-line no-unused-vars
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

  const dropdownList = (valuesList, selectedValue, setSelectedValue) => {
    return (
      <ul className="filters__dropdown-list">
        {valuesList.map((item) => {
          return (
            <li
              onClick={() => {
                setSelectedValue(item.value.toString());
              }}
              className={`filters__dropdown-list-item${
                selectedValue === item.value.toString() ? "--selected" : "" // Apply 'selected' class if item is selected
              }`}
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
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={dropdownRef} className="filters__container">
      <Button
        variant="outlined"
        sx={{
          color: "#fe900a",
          border: "1px solid #fe900a",
          "&:hover": {
            backgroundColor: "#fe900a",
            color: "#fff",
            border: "1px solid #fe900a",
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
              {dropdownList(values, minSelectedValue, setMinSelectedValue)}
            </div>
            -
            <div style={{ marginLeft: "10px" }}>
              <input
                value={`${maxSelectedValue}  ${symbol}`}
                onChange={() => {}}
                className="filters__dropdown-input"
              />
              {dropdownList(values, maxSelectedValue, setMaxSelectedValue)}
            </div>
          </div>
          <Button
            variant="outlined"
            sx={{
              color: "var(--orange-color)",
              border: "1px solid var(--orange-color)",
              display: "none",
              "@media (max-width: 480px)": {
                display: "block",
              },
              zIndex: 2,
              "&:hover": {
                backgroundColor: "var(--orange-color)",
                color: "#fff",
                border: "1px solid var(--orange-color)",
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
