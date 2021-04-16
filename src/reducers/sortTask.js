import * as types from "../constants/ActionType";

var initStateSort = {
  sortBy: "name",
  sortValue: 1,
};

var myReducer = (state = initStateSort, action) => {
  switch (action.type) {
    case types.SORT_TASK:
      return action.sort;
    default:
      return state;
  }
};

export default myReducer;
