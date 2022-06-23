import dispatch from ".";
import { TASKS_GET, TASKS_LOADING } from "./types";
import { ListTasksService } from "../../services/TasksServices";

export const setSearch = async () => {
  dispatch(TASKS_LOADING);
  const data = await ListTasksService();
  dispatch(TASKS_GET, data);
};
