import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import TasksReducer from "./reducer/TasksReducer";

const store = createStore(TasksReducer, applyMiddleware(thunkMiddleware));

export default store;
