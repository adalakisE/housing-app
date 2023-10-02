import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../api/images/logo.jpg";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import UserProfile from "../UserProfile/UserProfile";
import "./TopBarStyles.scss";

function TopBarWrapper() {
  const currentRoute = useLocation().pathname;

  return (
    <div className="top-bar__container">
      <div className="top-bar__items-container">
        <div className="top-bar__logo-container">
          <Link to="/landingpage">
            <img className="top-bar__logo-icon" src={logo} alt="logo" />
          </Link>
          <h3 className="top-bar__logo-text">Fox House</h3>
        </div>
        {currentRoute === "/mainpage" ? <SearchBar /> : <></>}
        <UserProfile />
      </div>
      {currentRoute === "/mainpage" ? <Filters /> : <></>}
    </div>
  );
}

export default TopBarWrapper;
