import * as actionTypes from "../actions/actionTypes";

const initialState = {
  storedItems: [],
  storedPrice: 0,
  storedSize: 0,
  storedBedrooms: 0,
  filteredItems: [],
  itemsInComparison: [],
};

function actionFunction(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_ITEMS:
      return {
        ...state,
        storedItems: action.payload,
      };

    case actionTypes.FILTERED_ITEMS:
      return {
        ...state,
        filteredItems: action.payload,
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

    case actionTypes.FILTER_ALL:
      return {
        ...state,
        filteredItems: state.storedItems.filter(
          (item) =>
            item?.price > state.storedPrice &&
            item?.sqFt > state.storedSize * 10 &&
            item?.bedrooms > state.storedBedrooms
        ),
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

    default:
      return state;
  }
}

export default actionFunction;
