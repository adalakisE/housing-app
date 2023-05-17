import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function TopBarFilters() {
  return (
    <div className="top-bar__filters-container">
      <Select
        className="top-bar__filter"
        value="10"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
      <Select
        className="top-bar__filter"
        value="10"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
      <Select
        className="top-bar__filter"
        value="10"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
    </div>
  );
}

export default TopBarFilters;
