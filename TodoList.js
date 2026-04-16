import React, { useState } from 'react';
import Todoitem from './Todoitem';

function TodoList() {

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function addTask() {
    if (text.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="todo-list">

      {/* Input + Button (TOP like your image) */}
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {/* Task List */}
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}

    </div>
  );
}

export default TodoList;
