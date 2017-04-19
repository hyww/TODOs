import React from 'react';

const todoList = (props) => {
  const list = props.todoList;
  const todos = list.todos.map((todo, index) =>
    <li>
      <input type="checkbox"
        onChange={props.todoOnCheck.bind(props.app, props.listIndex, index)}
        checked={todo.done}
      >
      </input>
      <input type="text"
      className={todo.done?'todo-done':''}
      onClick={props.todoOnClick.bind(props.app, props.listIndex, index)}
      onChange={props.todoOnChange.bind(props.app, props.listIndex, index)}
      value={todo.text}
      >
      </input>
      <button onClick={props.todoDelete.bind(props.app, props.listIndex, index)}>Delete</button>
    </li>
  );
  return (
    <div className="todo-list">
      <span className="list-title">{list.title}</span>
      <button onClick={props.todoAdd}>Add</button>
      <button onClick={props.listDelete}>X</button>
      <ul>
        {todos}
      </ul>
    </div>
  )
  
};

export default todoList;
