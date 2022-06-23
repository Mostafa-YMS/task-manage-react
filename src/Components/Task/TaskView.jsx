import { DeleteTaskAction } from "../../store/actions/TasksActions";
import { useDispatch } from "react-redux";

const TaskView = ({ task, handleOpen }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    DeleteTaskAction({ id: task.id })(dispatch);
  };

  return (
    <div
      style={{
        border: "2px solid #E2E2E2",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h5>{task?.title}</h5>
      <p>{task?.description}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleOpen}>Edit</button>
      </div>
    </div>
  );
};

export default TaskView;
