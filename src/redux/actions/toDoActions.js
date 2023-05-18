import * as actionTypes from "./actionTypes";

export const addToComparison = (id) => {
  return {
    type: actionTypes.ADD_TO_COMPARISON,
    payload: id,
  };
};

export const removeFromComparison = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_COMPARISON,
    payload: id,
  };
};
