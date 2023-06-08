import * as actionTypes from "./actionTypes";

export const storeItems = (items) => {
  return {
    type: actionTypes.STORE_ITEMS,
    payload: items,
  };
};

export const filteredItems = (items) => {
  return {
    type: actionTypes.FILTERED_ITEMS,
    payload: items,
  };
};

export const storePrice = (price) => {
  return {
    type: actionTypes.STORE_PRICE,
    payload: price,
  };
};
export const storeSize = (size) => {
  return {
    type: actionTypes.STORE_SIZE,
    payload: size,
  };
};
export const storeBedrooms = (bedrooms) => {
  return {
    type: actionTypes.STORE_BEDROOMS,
    payload: bedrooms,
  };
};

export const filterAll = () => {
  return {
    type: actionTypes.FILTER_ALL,
    payload: "",
  };
};

export const addToComparison = (item) => {
  return {
    type: actionTypes.ADD_TO_COMPARISON,
    payload: item,
  };
};

export const removeFromComparison = (item) => {
  return {
    type: actionTypes.REMOVE_FROM_COMPARISON,
    payload: item,
  };
};
