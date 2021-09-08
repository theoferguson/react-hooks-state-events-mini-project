import React from "react";

function NewTaskForm({categories, taskList, onTaskFormSubmit}) {
  const dropDown = categories.filter(category => category !== "All")

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target.text.value)
    console.log(event.target.category.value)
    const newTaskList = [...taskList, {
      "text": event.target.text.value,
      "category": event.target.category.value
  }]
    onTaskFormSubmit(newTaskList)
  }

  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {dropDown.map(category => {
            return (
              <option value={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
