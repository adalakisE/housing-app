import React from "react";
import TopBar from "./TopBar/TopBarWrapper";
import Listings from "./Listings/ListingsWrapper";
import MapWrapper from "./Features/MapWrapper";
import ComparisonFooter from "./Listings/ComparisonFooter/ComparisonFooter";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import "./ViewStyles.scss";

function View() {
  const stateItems = useSelector((state) => state.storedItems);

  return (
    <div className="view">
      <div className={`loading-layer${stateItems.length ? "--hidden" : ""}`}>
        <TopBar />
        <div className="middle-page-wrapper">
          <Listings />
          <MapWrapper />
        </div>
      </div>

      <Box
        sx={{
          position: "absolute",
          right: "calc(50vw - 48px)",
          top: "calc(50vh - 40px)",
          display: () => (stateItems.length ? "none" : "block"),
        }}
      >
        <CircularProgress size={80} />
      </Box>
      <ComparisonFooter />
    </div>
  );
}

export default View;
