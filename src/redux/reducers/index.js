import { combineReducers } from "redux";

import appReducer from "./toDoReducer";

//combine all reducers
const allReducers = combineReducers({
  appReducer,
});

const rootReducer = (state, action) => {
  // clear all data in redux store to initial state
  if (action.type === "RESET_STATE") {
    return allReducers(undefined, action);
  }

  return allReducers(state, action);
};

export default rootReducer;
