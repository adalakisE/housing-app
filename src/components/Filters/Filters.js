import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import {
  storePrice,
  storeSize,
  storeBedrooms,
  filterAll,
} from "../../redux/actions/toDoActions";
import "./FiltersStyles.scss";

function Filters() {
  const [filterPrice, setFilterPrice] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const [filterBedroom, setfilterBedroom] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    console.log(e.target);
    if (e.target.name === "Price") {
      setFilterPrice(e.target.value);
      dispatch(storePrice(e.target.value));
    } else if (e.target.name === "Size") {
      setFilterSize(e.target.value);
      dispatch(storeSize(e.target.value));
    } else if (e.target.name === "Bedrooms") {
      setfilterBedroom(e.target.value);
      dispatch(storeBedrooms(e.target.value));
    }

    dispatch(filterAll());
  }

  return (
    <div className="filters__container">
      <Select
        className="filters__item"
        value={filterPrice}
        name="Price"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      >
        <MenuItem value="">Price</MenuItem>
        <MenuItem value={900}>{`> $900`}</MenuItem>
        <MenuItem value={1100}>{`> $1100`}</MenuItem>
      </Select>
      <Select
        className="filters__item"
        value={filterSize}
        name="Size"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      >
        <MenuItem value="">Size</MenuItem>
        <MenuItem value={50}>{`> 50m2`}</MenuItem>
        <MenuItem value={100}>{`> 100m2`}</MenuItem>
      </Select>
      <Select
        className="filters__item"
        value={filterBedroom}
        name="Bedrooms"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      >
        <MenuItem value="">Bedrooms</MenuItem>
        <MenuItem value={1}>{`> 1`}</MenuItem>
        <MenuItem value={2}>{`> 2`}</MenuItem>
      </Select>
    </div>
  );
}

export default Filters;
