import React from "react";
import Button from "@mui/material/Button";
import "./UserProfileStyles.scss";

function UserProfile() {
  return (
    <div className="user-profile-button__container">
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "var(--orange-color)",
          color: "#fff",
          border: "1px solid var(--orange-color)",
          padding: "8px 24px 8px 24px",
          "&:hover": {
            backgroundColor: "var(--orange-color-hover)",
            color: "#fff",
            border: "1px solid var(--orange-color)",
          },
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default UserProfile;
