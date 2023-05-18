import * as actionTypes from "../actions/actionTypes";
const initialState = {
  itemsInComparison: [],
};

function actionFunction(state = initialState, action) {
  switch (action.type) {
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
