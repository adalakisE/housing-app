import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import UserProfile from "../UserProfile/UserProfile";
import { useDispatch } from "react-redux";
import { resetState } from "../../redux/actions/toDoActions";
import "./TopBarStyles.scss";

function TopBarWrapper({ autoSearch, isVisible }) {
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(resetState());
  }

  return (
    <div className="top-bar__container">
      <div className="top-bar__items-container">
        <div className="top-bar__logo-container">
          <Link to="/">
            <img
              onClick={handleReset}
              className="top-bar__logo-icon"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <SearchBar />
        <UserProfile />
      </div>
      {isVisible && <Filters autoSearch={autoSearch} />}
    </div>
  );
}

export default TopBarWrapper;
