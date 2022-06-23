import { TASKS_ADD, TASKS_DELETE, TASKS_GET, TASKS_LOADING } from "./types";
import {
  addTaskService,
  deleteTaskService,
  ListTasksService,
} from "../../services/TasksServices";

export const ListTasksAction = () => (dispatch) => {
  dispatch({ type: TASKS_LOADING });
  ListTasksService().then((d) => {
    dispatch({ type: TASKS_GET, payload: d?.data });
  });
};

export const AddTaskAction =
  ({ title, description }) =>
  (dispatch) => {
    addTaskService({ title, description }).then(() => {
      dispatch({ type: TASKS_ADD, payload: { title, description } });
    });
  };

export const DeleteTaskAction =
  ({ id }) =>
  (dispatch) => {
    deleteTaskService({ id }).then(() => {
      dispatch({ type: TASKS_DELETE, payload: id });
    });
  };
