const Task = ({ task }) => {
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
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Task;
