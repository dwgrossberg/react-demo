import React from "react";

const Overview = (props) => {
  const tasks = props.tasks;
  const handleDelete = (e) => {
    props.onDeleteTask(e.target.parentElement.childNodes[0].id);
  };

  const handleEdit = (e) => {
    e.target.parentElement.childNodes[0].setAttribute("contentEditable", true);
    e.target.style.display = "none";
    e.target.parentElement.childNodes[2].style.display = "inline";
  };

  const reSubmit = (e) => {
    e.target.parentElement.childNodes[0].setAttribute("contentEditable", false);
    e.target.style.display = "none";
    e.target.parentElement.childNodes[1].style.display = "inline";
    props.onEditTask(
      e.target.parentElement.childNodes[0].innerText,
      e.target.parentElement.childNodes[0].id
    );
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <li id={task.id}>{task.text}</li>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={reSubmit} style={{ display: "none" }}>
              Resubmit
            </button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
