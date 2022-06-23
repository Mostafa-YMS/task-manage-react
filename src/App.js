import TasksList from "./Pages/TasksList";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Task Manager</h1>
      <button>Add Task</button>
      <TasksList />
    </div>
  );
}

export default App;
