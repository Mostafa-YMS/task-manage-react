import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditTaskAction } from "../../store/actions/TasksActions";

const TaskEdit = ({ task, handleClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      EditTaskAction({ id: task?.id, title, description })(dispatch);
      handleClose();
    }
  };

  return (
    <form
      style={{
        border: "2px solid #E2E2E2",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <p style={{ fontWeight: "bold" }}>Edit Task</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          required
          type="text"
          placeholder="Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <label htmlFor="description">description</label>
        <input
          required
          style={{ marginLeft: "10px" }}
          type="text"
          placeholder="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        <button onClick={handleClose}>Cancel</button>
        <button type="submit">Edit</button>
      </div>
    </form>
  );
};

export default TaskEdit;
