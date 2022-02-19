import React from "react";
import "./TopSection.css";

const TopSection = ({ submitHandler }) => {
  const [task, setTask] = React.useState("");
  return (
    <div className="top-section">
      <div className="heading">ToDo List</div>
      <form
        className="add-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(task);
        }}
      >
        <input
          className="add-text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Add a task"
        />
        <button
          type="submit"
          className="add-btn"
          onClick={(e) => {
            e.preventDefault();
            submitHandler(task);
            setTask("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TopSection;
