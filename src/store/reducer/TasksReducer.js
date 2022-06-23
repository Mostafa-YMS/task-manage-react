import { TASKS_ADD, TASKS_GET, TASKS_LOADING } from "../actions/types";

const TasksReducer = (state = { data: [], loading: false }, action) => {
  try {
    switch (action.type) {
      case TASKS_GET:
        let getState = { ...state };
        getState.data = action.payload;
        getState.loading = false;
        return getState;

      case TASKS_LOADING:
        let loadState = { ...state };
        loadState.loading = true;
        return loadState;

      case TASKS_ADD:
        let addState = { ...state };
        addState.data.push(action.payload);
        return addState;

      default:
        return state;
    }
  } catch (e) {}
};

export default TasksReducer;
