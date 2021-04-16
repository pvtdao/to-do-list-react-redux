import * as types from "../constants/ActionType";

var initStateSearch = "";

var myReducer = (state = initStateSearch, action) => {
  switch (action.type) {
      case types.SEARCH_TASK:
          return action.keyword;
    default:
      return state;
  }
};

export default myReducer;
