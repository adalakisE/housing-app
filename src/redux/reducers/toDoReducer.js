import * as actionTypes from "../actions/actionTypes";

const initialState = {
  storedItems: [],
  storedPrice: 0,
  storedSize: 0,
  storedBedrooms: 0,
  itemsInComparison: [],
  fetching: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESET_STATE:
      return {
        ...initialState,
      };

    case actionTypes.STORE_ITEMS:
      return {
        ...state,
        storedItems: action.payload,
      };

    case actionTypes.STORE_PRICE:
      return {
        ...state,
        storedPrice: action.payload,
      };

    case actionTypes.STORE_SIZE:
      return {
        ...state,
        storedSize: action.payload,
      };

    case actionTypes.STORE_BEDROOMS:
      return {
        ...state,
        storedBedrooms: action.payload,
      };

    case actionTypes.STORE_TITLE:
      return {
        ...state,
        storedTitle: action.payload,
      };

    case actionTypes.ADD_TO_COMPARISON:
      return {
        ...state,
        itemsInComparison: [...state.itemsInComparison, action.payload],
      };

    case actionTypes.REMOVE_FROM_COMPARISON:
      return {
        ...state,
        itemsInComparison: state.itemsInComparison.filter(
          (item) => item !== action.payload
        ),
      };

    case actionTypes.FETCHING:
      return {
        ...state,
        fetching: action.payload,
      };

    default:
      return state;
  }
}

export default appReducer;
