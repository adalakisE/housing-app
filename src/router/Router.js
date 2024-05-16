import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPageView from "src/views/MainPage/MainPage";
import LandingPageView from "src/views/LandingPage/LandingPage";
import PropertyDetailsView from "src/views/PropertyPage/PropertyPage";

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
