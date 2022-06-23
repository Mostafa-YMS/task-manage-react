import { useCallback, useState } from "react";
import TaskEdit from "./TaskEdit";
import TaskView from "./TaskView";

const Task = ({ task }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpen = useCallback(() => setOpenEdit(true), []);
  const handleClose = useCallback(() => setOpenEdit(false), []);

  return (
    <>
      {openEdit ? (
        <TaskEdit task={task} handleClose={handleClose} />
      ) : (
        <TaskView task={task} handleOpen={handleOpen} />
      )}
    </>
  );
};

export default Task;
