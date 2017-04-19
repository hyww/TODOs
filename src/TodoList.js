import React from 'react';

const todoList = (props) => {
  const list = props.todoList;
  const todos = list.todos.map((todo, index) =>
    <div className="todo">
      <input type="checkbox"
        onChange={props.todoOnCheck.bind(props.app, props.listIndex, index)}
        checked={todo.done}
      />
      <input type="text"
        className={todo.done?'todo-done':''}
        onChange={props.todoOnChange.bind(props.app, props.listIndex, index)}
        value={todo.text}
      />
      <button onClick={props.todoDelete.bind(props.app, props.listIndex, index)}>Ｘ</button>
    </div>
  );
  return (
    <div className="todo-list">
      <input type="text" 
        className="list-title"
        onChange={props.titleOnChange.bind(props.app, props.listIndex)}
        value={list.title}
      />
      <button onClick={props.todoAdd}>＋</button>
      <button onClick={props.listDelete}>Ｘ</button>
      {todos}
    </div>
  )
  
};

export default todoList;
