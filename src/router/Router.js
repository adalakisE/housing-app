import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPageView from "../views/MainPage/MainPage";
import LandingPageView from "../views/LandingPage/LandingPage";
import PropertyDetailsView from "../views/PropertyPage/PropertyPage";

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPageView />}></Route>
      <Route path="/mainpage/:id" element={<MainPageView />}></Route>
      <Route
        path="/mainpage/search/property/:id"
        element={<PropertyDetailsView />}
      ></Route>
    </Routes>
  );
}

export default Router;
