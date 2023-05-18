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

export const filterByPrice = (price) => {
  return {
    type: actionTypes.FILTER_BY_PRICE,
    payload: price,
  };
};

export const filterBySize = (size) => {
  return {
    type: actionTypes.FILTER_BY_SIZE,
    payload: size,
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
