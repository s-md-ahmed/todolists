import React, { useState } from 'react';
export default function Checklist() {
  const [todos, setTodos] = useState([]);//empty array for later on adding the todos
  const addTodo = () => {
    setTodos([...todos, { checked: false, text: '' }]);//function to dynamically add todos using ... and { checked: false, text: '' }is an object to uncheck the todo by default and keep the text empty
  };
  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];//creating a copy of the todos
    if(updatedTodos[index].text==''&&updatedTodos[index].checked ==false)
    {
        alert('No text at all')
        return
    }
    updatedTodos[index].checked = !updatedTodos[index].checked;//toggling the check
    setTodos(updatedTodos);
  };
  const handleDeleteLast = () => {
    const updatedTodos = [...todos];
    updatedTodos.splice(updatedTodos.length - 1, 1);
    setTodos(updatedTodos);
  };
  const handleInputChange = (index, event) => {
    // Create a copy of the todos array
    const updatedTodos = [...todos];
    // Update the text property of the specific todo item at the given index
    updatedTodos[index].text = event.target.value;
    // Update the state with the new copy of todos
    setTodos(updatedTodos);
  };
  const completedTasks = todos.filter((todo) => todo.checked === true);
  return (
    
    <>
    <div className="container">
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <div className="input-group mb-3" key={index}>
          <div className="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input" checked={todo.checked} onChange={() => handleCheckboxChange(index)}/>
          </div>
          <input type="text" className="form-control" aria-label="Text input with checkbox" value={todo.text} onChange={(event) => handleInputChange(index, event)}/>
        </div>
      ))}
      <button className="btn btn-primary" onClick={addTodo}>
        Add a Todo
      </button>
      <button onClick={handleDeleteLast} className="btn btn-warning text-danger mx-5">Delete the todo</button>
    </div>
    <div>
        <h1 className="text-center">Here are the completed tasks</h1>
        <ol>
          {completedTasks.map((task, index) => (
            <li key={index}>{task.text}</li>
          ))}
        </ol>
      </div>
    </>
  );
}