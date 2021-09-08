import React from "react";
import Task from "./Task";
import { v4 as uuid } from 'uuid';

function TaskList({taskList, setTaskList, categoryList}) {

  const newList = taskList.map(task => {
    if (categoryList === "All") {
    return ( <Task task={task} key={uuid()} setTaskList={setTaskList} taskList={taskList} /> );
    } else if (task.category === categoryList) {
      return ( <Task task={task} key={uuid()} setTaskList={setTaskList} taskList={taskList} /> );
    }
  })
  
  return (
    <div className="tasks">
      {newList}
    </div>
  );
}

export default TaskList;
