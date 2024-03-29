import {
  TASKS_ADD,
  TASKS_DELETE,
  TASKS_EDIT,
  TASKS_GET,
  TASKS_LOADING,
} from "../actions/types";

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

      case TASKS_EDIT:
        let editState = { ...state };

        const taskEdit = editState.data.filter(
          (e) => e?.id === action.payload.id
        )[0];

        const index = editState.data.indexOf(taskEdit);

        editState.data[index] = action.payload;
        return editState;

      case TASKS_DELETE:
        let delState = { ...state };
        delState.data = delState.data.filter((e) => e.id !== action.payload);
        return delState;

      default:
        return state;
    }
  } catch (e) {}
};

export default TasksReducer;
