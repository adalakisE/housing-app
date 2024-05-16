import React from "react";
import TextField from "@mui/material/TextField";
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
        <button className="property-details-form__submit-btn">
          I'm interested
        </button>
      </form>
    </div>
  );
}

export default PropertyDetailsForm;
