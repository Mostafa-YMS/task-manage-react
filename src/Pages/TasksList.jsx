import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Components/Task";
import { ListTasksAction } from "../store/actions/TasksActions";

const TasksList = () => {
  const dispatch = useDispatch();

  const { data: tasks, loading } = useSelector((s) => s.tasks);

  const fetchTasks = useCallback(() => {
    dispatch && ListTasksAction()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchTasks && fetchTasks();
  }, [fetchTasks]);

  return (
    <div>
      {tasks?.length > 0 &&
        tasks?.map((task, i) => <Task key={i} task={task} />)}
    </div>
  );
};

export default TasksList;
