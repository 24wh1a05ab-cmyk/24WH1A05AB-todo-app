import React from 'react';

function Todoitem({ task, deleteTask, toggleCompleted }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />

      {task.text}

      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default Todoitem;
