import React from "react";
import TopBar from "./TopBar/TopBarWrapper";
import Listings from "./Listings/ListingsWrapper";
import MapWrapper from "./Features/MapWrapper";
import ComparisonFooter from "./Listings/ComparisonFooter/ComparisonFooter";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./ViewStyles.scss";

function View() {
  return (
    <div className="view">
      <TopBar />
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      <div className="middle-page-wrapper">
        <Listings />
        <MapWrapper />
      </div>
      <ComparisonFooter />
    </div>
  );
}

export default View;
