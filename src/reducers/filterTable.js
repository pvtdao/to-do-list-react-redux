import * as types from "../constants/ActionType";

var initStateFilter = {
  name: "",
  status: -1
};

var myReducer = (state = initStateFilter, action) => {
  switch (action.type) {
    case types.FILTER_TABLE:
      return action.filter;
    default:
      return state;
  }
};

export default myReducer;
