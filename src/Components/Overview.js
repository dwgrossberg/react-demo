import React from "react";

const Overview = (props) => {
  const tasks = props.tasks;
  const handleDelete = (e) => {
    console.log(e.target.parentElement.id);
    props.onDeleteTask(e.target.parentElement.id);
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id} id={task.id}>
            {task.text}
            <button onClick={handleDelete}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
