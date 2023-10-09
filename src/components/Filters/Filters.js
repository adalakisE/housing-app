import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import "./FiltersStyles.scss";

function Filters() {
  const dispatch = useDispatch();
  const storedPrice = useSelector((state) => state.appReducer.storedPrice);
  const storedSize = useSelector((state) => state.appReducer.storedSize);
  const storedBedrooms = useSelector(
    (state) => state.appReducer.storedBedrooms
  );

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

  /* MAKE IT FIRE THE API CALL ON CHANGE */
  /* constructing the redux action to dispatch */
  function handleChange(e) {
    dispatch({
      type: `STORE_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  }

  // useEffect(() => {
  //   // Dispatch an action to indicate a filter change
  //   dispatch({ type: "FILTERS_CHANGED" });
  // }, [storedPrice, storedSize, storedBedrooms, dispatch]);

  return (
    <div className="filters__container">
      <FormControl>
        <Select
          className="filters__item"
          value={storedPrice}
          name="Price"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChange}
        >
          <MenuItem value={0}>{`Price`}</MenuItem>
          {priceRange}
          {/* <MenuItem value={900}>{`> $900`}</MenuItem>
          <MenuItem value={1100}>{`> $1100`}</MenuItem> */}
        </Select>
      </FormControl>
      <Select
        className="filters__item"
        value={storedSize}
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
        value={storedBedrooms}
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
