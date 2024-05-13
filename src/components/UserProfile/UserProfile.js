import React from "react";
// import User from "../../api/Icons/user.png";
import Button from "@mui/material/Button";
import "./UserProfileStyles.scss";

function UserProfile() {
  return (
    <div className="user-profile-button__container__off">
      <Button
        variant="outlined"
        sx={{
          color: "#f29e7e",
          border: "1px solid #f29e7e",
          padding: "8px 24px 8px 24px",
          "&:hover": {
            backgroundColor: "#f29e7e",
            color: "#fff",
            border: "1px solid #f29e7e",
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
