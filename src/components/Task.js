import React from "react";

function Task({task, setTaskList, taskList}) {
  function handleDelete(event) {
    console.log(task)
    const newList = taskList.filter(item => item !== task)
    setTaskList(newList)
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
