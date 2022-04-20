import React, { useState } from 'react';
import ToDoList from './ToDoList'
import "./App.css";


function App() {

  const [todo, setTodo] = useState('');

  const [todoItems, setTodoItems] = useState([]);

  const inputEvent = (e) => {
    setTodo(e.target.value);

  }

  const addTodo = () => {
    setTodoItems((prevTodoItems) => {
      return [...prevTodoItems, todo]
    });
    setTodo('');
  }

  const deletItem = (index) => {
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.filter((item, idx) => {
        return idx !== index
      })
    });
  }


  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1>TODO LIST</h1>
        <input name="todo" value={todo} placeholder="Add Todo" onChange={inputEvent} />
        <button onClick={addTodo}>ADD TODO</button>
        <div className="todo-list">
          <ul>
            {todoItems.map((todoItem, index) => {
              return <ToDoList text={todoItem} key={index} index={index} onSelect={deletItem} />
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
