import * as actionTypes from "./actionTypes";

export const storeItems = (items) => {
  return {
    type: actionTypes.STORE_ITEMS,
    payload: items,
  };
};

// export const storePrice = (price) => {
//   return {
//     type: actionTypes.STORE_PRICE,
//     payload: price,
//   };
// };
// export const storeSize = (size) => {
//   return {
//     type: actionTypes.STORE_SIZE,
//     payload: size,
//   };
// };
// export const storeBedrooms = (bedrooms) => {
//   return {
//     type: actionTypes.STORE_BEDROOMS,
//     payload: bedrooms,
//   };
// };
// export const storeFilters = (filterName, filterValue) => {
//   return {
//     type: actionTypes.STORE_FILTERS,
//     payload: { filterName, filterValue },
//   };
// };
export const setFilters = (filters) => ({
  type: actionTypes.SET_FILTERS,
  payload: filters,
});

export const storedFilters = (filters) => {
  return {
    type: actionTypes.STORE_FILTERS,
    payload: filters,
  };
};

export const storeTitle = (title) => {
  return {
    type: actionTypes.STORE_TITLE,
    payload: title,
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

export const fetching = (status) => {
  return {
    type: actionTypes.FETCHING,
    payload: status,
  };
};

export const resetState = () => {
  return {
    type: actionTypes.RESET_STATE,
  };
};
