import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import itemReducer from "../reducers/toDoReducer";

const store = createStore(
  itemReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
