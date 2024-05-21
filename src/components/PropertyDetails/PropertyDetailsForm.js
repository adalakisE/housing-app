import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./PropertyDetailsStyles.scss";

function PropertyDetailsForm() {
  return (
    <div className="property-details-form">
      <form className="property-details-form__form-container">
        <p>Contact Form</p>
        <TextField
          sx={{ mb: "15px" }}
          id="outlined-password-input"
          label="Name"
          type="name"
          autoComplete="current-password"
        />
        <TextField
          sx={{ mb: "15px" }}
          id="outlined-password-input"
          label="Last name"
          type="name"
          autoComplete="current-password"
        />
        <TextField
          sx={{ mb: "15px" }}
          id="outlined-password-input"
          label="email"
          type="email"
          autoComplete="current-password"
        />
        <div className="property-details-form__submit-btn">
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "var(--orange-color)",
              color: "#fff",
              border: "1px solid var(--orange-color)",
              padding: "8px 24px 8px 24px",
              width: "100%",
              "&:hover": {
                backgroundColor: "var(--orange-color-hover)",
                color: "#fff",
                border: "1px solid var(--orange-color)",
              },
            }}
          >
            I'm interested
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PropertyDetailsForm;
