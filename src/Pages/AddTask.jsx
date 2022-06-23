import { useRef } from "react";
import { AddTaskAction } from "../store/actions/TasksActions";
import { useDispatch } from "react-redux";

const AddTask = ({ toList }) => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    if (title && description) {
      AddTaskAction({ title, description })(dispatch);
      toList();
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
          ref={titleRef}
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
          ref={descriptionRef}
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
        <button onClick={toList}>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTask;
