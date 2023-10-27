import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { storeFilters } from "../../redux/actions/toDoActions";
import { useDispatch, useSelector } from "react-redux";

import "./FiltersStyles.scss";

function Filters() {
  const dispatch = useDispatch();
  const location = useLocation();

  const storedFilters = useSelector((state) => state.appReducer.storedFilters);

  const [searchParams, setSearchParams] = useSearchParams({
    price: "",
    size: "",
    bedrooms: "",
  });

  const price = searchParams.get("price");
  const size = searchParams.get("size");
  const bedrooms = searchParams.get("bedrooms");

  const priceRange = [700, 900, 1300, 1900, 2800, 3200].map((price, index) => (
    <MenuItem key={index} value={price}>{`> $ ${price}`}</MenuItem>
  ));

  const sizeRange = [50, 70, 110, 150, 210, 290].map((size, index) => (
    <MenuItem key={index} value={size}>{`> ${size} sqm2`}</MenuItem>
  ));

  const bedroomRange = [1, 2, 3, 4].map((bedroom, index) => (
    <MenuItem key={index} value={bedroom}>{`> ${bedroom}`}</MenuItem>
  ));

  function handleChange(e) {
    if (location.pathname !== "/") {
      setSearchParams((prev) => {
        prev.set(e.target.name.toLowerCase(), e.target.value);
        return prev;
      });
    }
    dispatch(storeFilters(e.target.name.toLowerCase(), e.target.value));
  }

  return (
    <div className="filters__container">
      <FormControl>
        <Select
          className="filters__item"
          value={storedFilters.price ? storedFilters.price : price ? price : 0}
          name="Price"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChange}
        >
          <MenuItem value={0}>{`Price`}</MenuItem>
          {priceRange}
        </Select>
      </FormControl>
      <Select
        className="filters__item"
        value={storedFilters.size ? storedFilters.size : size ? size : 0}
        name="Size"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      >
        <MenuItem value={0}>{`Size`}</MenuItem>
        {sizeRange}
      </Select>
      <Select
        className="filters__item"
        value={
          storedFilters.bedrooms
            ? storedFilters.bedrooms
            : bedrooms
            ? bedrooms
            : 0
        }
        name="Bedrooms"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      >
        <MenuItem value={0}>{`Bedrooms`}</MenuItem>
        {bedroomRange}
      </Select>
    </div>
  );
}

export default Filters;
