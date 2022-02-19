import React from "react";
import { Check, X } from "react-feather";
import "./TaskItem.css";

const TaskItem = ({ task, index, deleteTask }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className={`task-wrapper ${index % 2 === 0 ? "" : "task-dark"}`}>
      <div className="task-icon" onClick={() => setIsChecked(!isChecked)}>
        {isChecked && <Check />}
      </div>
      <div
        className={`task-title ${isChecked && "cut"}`}
        onClick={() => setIsChecked(!isChecked)}
      >
        {task}
      </div>
      <div className="task-icon" onClick={() => deleteTask(task)}>
        <X />
      </div>
    </div>
  );
};

export default TaskItem;
