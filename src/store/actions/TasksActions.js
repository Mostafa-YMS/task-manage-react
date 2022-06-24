import {
  TASKS_ADD,
  TASKS_DELETE,
  TASKS_EDIT,
  TASKS_GET,
  TASKS_LOADING,
} from "./types";
import {
  addTaskService,
  deleteTaskService,
  editTaskService,
  ListTasksService,
  SearchTasksService,
} from "../../services/TasksServices";

export const ListTasksAction = () => (dispatch) => {
  dispatch({ type: TASKS_LOADING });
  ListTasksService().then((d) => {
    dispatch({ type: TASKS_GET, payload: d?.data });
  });
};

export const SearchTasksAction =
  ({ text }) =>
  (dispatch) => {
    dispatch({ type: TASKS_LOADING });
    SearchTasksService({ text }).then((d) => {
      dispatch({ type: TASKS_GET, payload: d?.data });
    });
  };

export const AddTaskAction =
  ({ id, title, description }) =>
  (dispatch) => {
    addTaskService({ id, title, description }).then(() => {
      dispatch({ type: TASKS_ADD, payload: { title, description } });
    });
  };

export const EditTaskAction =
  ({ id, title, description }) =>
  (dispatch) => {
    editTaskService({ id, title, description }).then(() => {
      dispatch({ type: TASKS_EDIT, payload: { id, title, description } });
    });
  };

export const DeleteTaskAction =
  ({ id }) =>
  (dispatch) => {
    deleteTaskService({ id }).then(() => {
      dispatch({ type: TASKS_DELETE, payload: id });
    });
  };
