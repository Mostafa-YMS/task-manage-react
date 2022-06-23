import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import TasksReducer from "./reducer/TasksReducer";

const store = createStore(
  TasksReducer,
  applyMiddleware(thunkMiddleware) + window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
