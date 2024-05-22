import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import Plus from "@/assets/Icons/plus.png";
import Filters from "@/components/Filters/Filters";
import SearchBar from "@/components/SearchBar/SearchBar";
import UserProfile from "@/components/UserProfile/UserProfile";
import AddProperty from "@/components/AddProperty/AddPropertyWrapper";
import { useDispatch } from "react-redux";
import { resetState } from "@/redux/actions/toDoActions";
import "./TopBarStyles.scss";

function TopBarWrapper({ autoSearch, isFiltersVisible }) {
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(resetState());
  }

  const [modalShow, setModalShow] = useState(false);

  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

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
      <div className="top-bar__filters-container">
        {isFiltersVisible && <Filters autoSearch={autoSearch} />}
        <button
          id="add-btn"
          onClick={handleOpen}
          className="top-bar__add-btn-container"
        >
          <img className="top-bar__add-btn-icon" src={Plus} alt="+" />
        </button>
        <AddProperty show={modalShow} handleClose={handleClose} />
      </div>
    </div>
  );
}

export default TopBarWrapper;
