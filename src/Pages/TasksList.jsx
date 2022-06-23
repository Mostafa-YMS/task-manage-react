import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListTasksAction } from "../store/actions/TasksActions";

const TasksList = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((s) => s);

  const fetchTasks = useCallback(() => {
    dispatch && !loading && ListTasksAction()(dispatch);
  }, [dispatch, loading]);

  useEffect(() => {
    fetchTasks && fetchTasks();
  }, [fetchTasks]);

  return <></>
};

export default TasksList;
