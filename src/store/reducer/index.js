import { combineReducers } from "redux";
import TasksReducer from "./TasksReducer";

const reducers = combineReducers({
  tasks: TasksReducer,
});

export default reducers;
