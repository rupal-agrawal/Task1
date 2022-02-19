import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import TopSection from "./components/TopSection/TopSection";

function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="app-wrapper">
      <div className="app-center-box">
        {/* Top Section */}
        <TopSection submitHandler={addTask} />
        {/* List */}
        <TaskList
          TaskList={tasks}
          deleteTask={(taskToDelete) => {
            const index = tasks.indexOf(taskToDelete);
            setTasks(tasks.filter((task, i) => i !== index));
          }}
        />
      </div>
    </div>
  );
}

export default App;
