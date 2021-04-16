//Import actionType
import * as types from "./../constants/ActionType";
import { v4 as uuidv4 } from "uuid";

var data = JSON.parse(localStorage.getItem("tasks"));

//Tạo state mặc định
var taskStateInit = data ? data : [];

let checkID = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });

  return result;
};

var myReducer = (state = taskStateInit, action) => {
  var id = "";
  var index = -1;
  switch (action.type) {
    case types.LIST_ALL_TASKS:
      return state;
    case types.SAVE_TASK:
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: Number(action.task.status),
      };

      if (!task.id) {
        task.id = uuidv4();
        state.push(task);
      } else {
        index = checkID(state, task.id);
        state[index] = task;
      }
     
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS_TASK:
      id = action.id;
      index = checkID(state, id);

      let cloneTask = { ...state[index] };

      if (index !== -1) {
        if (cloneTask.status > -1 && cloneTask.status < 3) {
          if (cloneTask.status === 2) {
            cloneTask.status = 0;
          } else {
            cloneTask.status = cloneTask.status + 1;
          }
          state[index] = cloneTask;
          localStorage.setItem("tasks", JSON.stringify(state));
        }
      }
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      index = checkID(state, id);
      if (index !== -1) {
        // Từ vị trí index, xóa đi 1 phần tử
        state.splice(index, 1);
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
