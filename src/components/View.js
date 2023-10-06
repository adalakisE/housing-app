import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPageWrapper from "./MainPage/MainPageWrapper";
import LandingPageWrapper from "./LandingPage/LandingPageWrapper";
import "./ViewStyles.scss";

function View() {
  return (
    <div className="view">
      <Routes>
        <Route exact path="/" element={<LandingPageWrapper />}></Route>
        <Route path="/mainpage/:id" element={<MainPageWrapper />}></Route>
      </Routes>
    </div>
  );
}

export default View;
