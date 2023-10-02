import React from "react";
import User from "../../api/Icons/user.png";
import "./UserProfileStyles.scss";

function UserProfile() {
  return (
    <div className="user-profile__container">
      <img className="user-icon" src={User} alt="user" />
    </div>
  );
}

export default UserProfile;
