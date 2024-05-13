import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setFilters } from "../../redux/actions/toDoActions";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import "./FiltersStyles.scss";

function PriceRangeSelector({ autoSearch, isVisible }) {
  const location = useLocation();
  const navigate = useNavigate();

  const filters = useSelector((state) => state.appReducer.filters);

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

  const [minPrice, setMinPrice] = useState(
    filters.minPrice !== "" ? filters.minPrice : "From"
  );
  const [maxPrice, setMaxPrice] = useState(
    filters.maxPrice !== "" ? filters.maxPrice : "To"
  );
  const [minSize, setMinSize] = useState(
    filters.minSize !== "" ? filters.minSize : "From"
  );
  const [maxSize, setMaxSize] = useState(
    filters.maxSize !== "" ? filters.maxSize : "To"
  );
  const [minBedrooms, setMinBedrooms] = useState(
    filters.minBedrooms !== "" ? filters.minBedrooms : "From"
  );
  const [maxBedrooms, setMaxBedrooms] = useState(
    filters.maxBedrooms !== "" ? filters.maxBedrooms : "To"
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set("minPrice", minPrice === "From" ? "" : minPrice);
    params.set("maxPrice", maxPrice === "To" ? "" : maxPrice);
    params.set("minSize", minSize === "From" ? "" : minSize);
    params.set("maxSize", maxSize === "To" ? "" : maxSize);
    params.set("minBedrooms", minBedrooms === "From" ? "" : minBedrooms);
    params.set("maxBedrooms", maxBedrooms === "To" ? "" : maxBedrooms);

    const filters = {
      minPrice: minPrice === "From" ? "" : minPrice,
      maxPrice: maxPrice === "To" ? "" : maxPrice,
      minSize: minSize === "From" ? "" : minSize,
      maxSize: maxSize === "To" ? "" : maxSize,
      minBedrooms: minBedrooms === "From" ? "" : minBedrooms,
      maxBedrooms: maxBedrooms === "To" ? "" : maxBedrooms,
    };

    dispatch(setFilters(filters));

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
