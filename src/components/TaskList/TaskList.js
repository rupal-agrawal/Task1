import React from "react";
import TaskItem from "./TaskItem/TaskItem";

const TaskList = ({ TaskList, deleteTask }) => {
  return (
    <div>
      {TaskList.map((task, index) => (
        <TaskItem task={task} index={index} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
