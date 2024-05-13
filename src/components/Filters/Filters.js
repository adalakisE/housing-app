import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { storedFilters } from "../../redux/actions/toDoActions";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import "./FiltersStyles.scss";

function PriceRangeSelector({ autoSearch, isVisible }) {
  const location = useLocation();
  const navigate = useNavigate();

  const fetching = useSelector((state) => state.appReducer.fetching);

  const dispatch = useDispatch();

  const [priceValues] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      value: 700 + index * 100,
    }))
  );
  const [sizeValues] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      value: 50 + index * 20,
    }))
  );
  const [bedroomsValues] = useState(
    Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      value: 0 + index + 1,
    }))
  );

  const [minPrice, setMinPrice] = useState("From");
  const [maxPrice, setMaxPrice] = useState("To");
  const [minSize, setMinSize] = useState("From");
  const [maxSize, setMaxSize] = useState("To");
  const [minBedrooms, setMinBedrooms] = useState("From");
  const [maxBedrooms, setMaxBedrooms] = useState("To");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set("minPrice", minPrice === "From" ? "" : minPrice);
    params.set("maxPrice", maxPrice === "To" ? "" : maxPrice);
    params.set("minSize", minSize === "From" ? "" : minSize);
    params.set("maxSize", maxSize === "To" ? "" : maxSize);
    params.set("minBedrooms", minBedrooms === "From" ? "" : minBedrooms);
    params.set("maxBedrooms", maxBedrooms === "To" ? "" : maxBedrooms);

    console.log(params);
    // const dispatchedParams = params;
    // console.log(params.toString());
    // dispatch(storedFilters(dispatchedParams));
    // const searchParamsString = params.toString();

    if (autoSearch) {
      navigate({ search: params.toString() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    minBedrooms,
    maxBedrooms,
    location.search,
    navigate,
  ]);

  return (
    <div style={{ display: "flex" }}>
      <Dropdown
        label="Price"
        values={priceValues}
        minSelectedValue={minPrice}
        maxSelectedValue={maxPrice}
        setMinSelectedValue={setMinPrice}
        setMaxSelectedValue={setMaxPrice}
      />
      <Dropdown
        label="Size"
        values={sizeValues}
        minSelectedValue={minSize}
        maxSelectedValue={maxSize}
        setMinSelectedValue={setMinSize}
        setMaxSelectedValue={setMaxSize}
      />
      <Dropdown
        label="Bedrooms"
        values={bedroomsValues}
        minSelectedValue={minBedrooms}
        maxSelectedValue={maxBedrooms}
        setMinSelectedValue={setMinBedrooms}
        setMaxSelectedValue={setMaxBedrooms}
      />
    </div>
  );
}

export default PriceRangeSelector;
