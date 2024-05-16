import React from "react";
import { Link } from "react-router-dom";
import logo from "src/assets/images/logo.png";
import SearchBar from "src/components/SearchBar/SearchBar";
import Filters from "src/components/Filters/Filters.js";
import UserProfile from "src/components/UserProfile/UserProfile";
import { useDispatch } from "react-redux";
import { resetState } from "src/redux/actions/toDoActions";
import "./LandingPageStyles.scss";

function LandingPageView() {
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(resetState());
  }

  return (
    <div className="landing-page">
      <div className="landing-page__top-bar">
        <Link to="/">
          <img
            onClick={handleReset}
            className="top-bar__logo-icon"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="landing-page__user-profile-btn">
          <UserProfile />
        </div>
      </div>
      <p className="landing-page__body-text">Find your dream home with us</p>
      <div className="landing-page__body">
        <SearchBar />
        <Filters autoSearch={false} isVisible={true} />
      </div>
    </div>
  );
}

export default LandingPageView;
