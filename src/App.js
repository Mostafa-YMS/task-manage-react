import AddTask from "./Pages/AddTask";
import TasksList from "./Pages/TasksList";
import { useCallback, useState } from "react";

function App() {
  const [current, setCurrent] = useState("list");

  const toList = useCallback(() => setCurrent("list"), []);
  const toAdd = useCallback(() => setCurrent("add"), []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Task Manager</h1>
      {current === "list" && <button onClick={toAdd}>Add Task</button>}
      {current === "list" && <TasksList />}
      {current === "add" && <AddTask toList={toList} />}
    </div>
  );
}

export default App;
