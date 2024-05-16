import React from "react";
import Button from "@mui/material/Button";
import "./UserProfileStyles.scss";

function UserProfile() {
  return (
    <div className="user-profile-button__container__off">
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "--orange-color",
          color: "#fff",
          border: "1px solid #fe900a",
          padding: "8px 24px 8px 24px",
          "&:hover": {
            backgroundColor: "#ea8203",
            color: "#fff",
            border: "1px solid #fe900a",
          },
        }}
      >
        Login
      </Button>
    </div>
    // <div className="user-profile__container">
    // </div>
  );
}

export default UserProfile;
