import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

function LoadingSpinner() {
  const stateItems = useSelector((state) => state.storedItems);
  return (
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
  );
}

export default LoadingSpinner;
