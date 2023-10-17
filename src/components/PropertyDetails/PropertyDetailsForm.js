import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import "./PropertyDetailsStyles.scss";

function PropertyDetailsForm() {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("20");
  const ageAsNumber = Number(age);

  return (
    <div className="property-details-form">
      <form className="property-details-form__form-container">
        <TextField
          id="outlined-password-input"
          label="Name"
          type="name"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Last name"
          type="name"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="email"
          type="email"
          autoComplete="current-password"
        />
        <label>
          First name:
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
          />
          <button onClick={() => setAge(ageAsNumber + 10)}>Add 10 years</button>
        </label>
        {firstName !== "" && <p>Your name is {firstName}.</p>}
        {ageAsNumber > 0 && <p>Your age is {ageAsNumber}.</p>}
      </form>
    </div>
  );
}

export default PropertyDetailsForm;
