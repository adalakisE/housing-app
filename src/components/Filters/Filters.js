import React from "react";
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

  /* MAKE IT FIRE THE API CALL ON CHANGE */
  function handleChange(e) {
    /* constructing the redux action to dispatch */
    dispatch({
      type: `STORE_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  }

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
          <MenuItem value={900}>{`> $900`}</MenuItem>
          <MenuItem value={1100}>{`> $1100`}</MenuItem>
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
        <MenuItem value={50}>{`> 50m2`}</MenuItem>
        <MenuItem value={100}>{`> 100m2`}</MenuItem>
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
        <MenuItem value={1}>{`> 1`}</MenuItem>
        <MenuItem value={2}>{`> 2`}</MenuItem>
      </Select>
    </div>
  );
}

export default Filters;
