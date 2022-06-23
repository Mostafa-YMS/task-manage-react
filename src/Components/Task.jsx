const Task = ({ task }) => {
  return (
    <>
      <h5>{task?.title}</h5>
      <p>{task?.description}</p>
    </>
  );
};

export default Task;
