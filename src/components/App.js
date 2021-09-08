import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [categoryList, setCategoryList] = useState("All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryList={categoryList} setCategoryList={setCategoryList}/>
      <NewTaskForm categories={CATEGORIES} taskList={taskList} onTaskFormSubmit={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} categoryList={categoryList} />
    </div>
  );
}

export default App;
