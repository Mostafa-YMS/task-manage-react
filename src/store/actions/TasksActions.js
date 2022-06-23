import { TASKS_GET, TASKS_LOADING } from "./types";
import { ListTasksService } from "../../services/TasksServices";

export const ListTasksAction = () => (dispatch) => {
  dispatch({ type: TASKS_LOADING });
  ListTasksService().then((d) => {
    dispatch({ type: TASKS_GET, payload: d?.data });
  });
};
