import React from "react";
import Button from "@mui/material/Button";

export default function ButtonPrimary({
  color,
  backgroundColor,
  text,
  onClick,
}) {
  return (
    <>
      <Button
        sx={{
          color: { color },
          border: "1px solid {color}",
          backgroundColor: { backgroundColor },
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
}
