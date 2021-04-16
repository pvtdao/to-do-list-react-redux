//Trong đây import các reducer vô rồi combine lại
import { combineReducers } from "redux";
import tasks from "./task";
import isDisplayForm from "./toggleForm";
import itemEditing from "./itemEditing";
import filterTable from "./filterTable";
import searchTask from "./search";
import sortTask from "./sortTask";

//Reducer của mình bằng combine các reducer kia
const myReducer = combineReducers({
  tasks, //tasks: tasks (task đầu là tên mình tự đặt, task sau là cái mình import ở trên)
  isDisplayForm,
  itemEditing,
  filterTable,
  searchTask,
  sortTask,
});

export default myReducer;
