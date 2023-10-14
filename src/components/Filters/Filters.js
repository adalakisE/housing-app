import React from "react";
import { useSearchParams } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import "./FiltersStyles.scss";

function Filters() {
  const [searchParams, setSearchParams] = useSearchParams({
    price: "",
    size: "",
    bedrooms: "",
  });

  const price = searchParams.get("price");
  const size = searchParams.get("size");
  const bedrooms = searchParams.get("bedrooms");

  let priceRange = [700, 900, 1300, 1900, 2800, 3200];
  let sizeRange = [50, 70, 110, 150, 210, 290];
  let bedroomRange = [1, 2, 3, 4];

  priceRange = priceRange.map((price) => (
    <MenuItem value={price}>{`> $ ${price}`}</MenuItem>
  ));
  sizeRange = sizeRange.map((size) => (
    <MenuItem value={size}>{`> ${size} sqm2`}</MenuItem>
  ));
  bedroomRange = bedroomRange.map((bedroom) => (
    <MenuItem value={bedroom}>{`> ${bedroom}`}</MenuItem>
  ));

  function handleChange(e) {
    console.log(e.target.name);
    setSearchParams((prev) => {
      prev.set(e.target.name.toLowerCase(), e.target.value);
      return prev;
    });
  }

  return (
    <div className="filters__container">
      <FormControl>
        <Select
          className="filters__item"
          value={price ? price : 0}
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
        value={size ? size : 0}
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
        value={bedrooms ? bedrooms : 0}
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
