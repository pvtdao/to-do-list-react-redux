import * as types from "../constants/ActionType";

var initStateEditingTask = {
  // id: "",
  // name: "",
  // status: 2,
};

var myReducer = (state = initStateEditingTask, action) => {
  switch (action.type) {
    case types.EDIT_ITEM:
      return action.task;
    default:
      return state;
  }
};

export default myReducer;
