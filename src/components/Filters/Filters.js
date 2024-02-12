import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import { useLocation, useNavigate } from "react-router-dom";
import "./FiltersStyles.scss";

// Reusable Dropdown component
const Dropdown = ({
  label,
  values,
  minSelectedValue,
  maxSelectedValue,
  onChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="filters__container">
      <Button
        variant="outlined"
        sx={{
          mb: 2,
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl>
            <Select
              value={minSelectedValue}
              onChange={(e) => onChange(e.target.value)}
              input={<Input />}
            >
              <MenuItem value="From">From</MenuItem>
              {values.map((value) => (
                <MenuItem key={value} value={value}>
                  {`${value}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ ml: 2 }}>
            <Select
              value={maxSelectedValue}
              onChange={(e) => onChange(e.target.value)}
              input={<Input />}
            >
              <MenuItem value="To">To</MenuItem>
              {values.map((value) => (
                <MenuItem key={value} value={value}>
                  {`${value}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
    </div>
  );
};

function PriceRangeSelector() {
  const location = useLocation();
  const navigate = useNavigate();

  const [priceValues] = useState(
    Array.from({ length: 20 }, (_, index) => 700 + index * 100)
  );
  const [sizeValues] = useState(
    Array.from({ length: 10 }, (_, index) => 50 + index * 20)
  );
  const [bedroomsValues] = useState(
    Array.from({ length: 5 }, (_, index) => 0 + index + 1)
  );

  const [minPrice, setMinPrice] = useState("From");
  const [maxPrice, setMaxPrice] = useState("To");
  const [minSize, setMinSize] = useState("From");
  const [maxSize, setMaxSize] = useState("To");
  const [minBedrooms, setMinBedrooms] = useState("From");
  const [maxBedrooms, setMaxBedrooms] = useState("To");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set("minPrice", minPrice === "From" ? "" : minPrice);
    params.set("maxPrice", maxPrice === "To" ? "" : maxPrice);
    params.set("minSize", minSize === "From" ? "" : minSize);
    params.set("maxSize", maxSize === "To" ? "" : maxSize);
    params.set("minBedrooms", minBedrooms === "From" ? "" : minBedrooms);
    params.set("maxBedrooms", maxBedrooms === "To" ? "" : maxBedrooms);
    navigate({ search: params.toString() });
  }, [
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    minBedrooms,
    maxBedrooms,
    location.search,
    navigate,
  ]);

  return (
    <div style={{ display: "flex" }}>
      <Dropdown
        label="Price"
        values={priceValues}
        minSelectedValue={minPrice}
        maxSelectedValue={maxPrice}
        // onChange={(min, max) => {
        //   setMinPrice(min);
        //   setMaxPrice(max);
        // }}
      />
      <Dropdown
        label="Size"
        values={sizeValues}
        selectedValue={`${minSize} - ${maxSize}`}
        onChange={(value) => {
          setMinSize(value);
          setMaxSize(value);
        }}
      />
      <Dropdown
        label="Bedrooms"
        values={bedroomsValues}
        selectedValue={`${minBedrooms} - ${maxBedrooms}`}
        onChange={(value) => {
          setMinBedrooms(value);
          setMaxBedrooms(value);
        }}
      />
    </div>
  );
}

export default PriceRangeSelector;
