import * as actionTypes from "./actionTypes";

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
