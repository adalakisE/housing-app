import * as actionTypes from "../actions/actionTypes";

const initialState = {
  storedItems: [],
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

    case actionTypes.FILTER_ALL:
      return {
        ...state,
        filteredItems: state.storedItems.filter(
          (item) =>
            item?.price > action.payload.price &&
            item?.sqFt > action.payload.size * 10
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
