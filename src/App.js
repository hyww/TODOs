import React from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.todoLists = [{ todos: [], title: 'Default' }];
    this.state = { todoList: this.todoLists };
  }

  listAdd() {
    this.todoLists.push({ todos: [] , title: 'New list' });
    this.setState({ todoList: this.todoLists });
  }
  listDelete(list) {
    this.todoLists.splice(list, 1);
    this.setState({ todoList: this.todoLists });
  }
  titleOnChange(list, e) {
    this.todoLists[list].title = e.target.value;
    this.setState({ todoList: this.todoLists });
  }
  todoOnClick(list, todo) {
    console.log(list, todo);
    console.log(this.todoLists[list]["todos"][todo].text);
  }
  todoOnChange(list, todo, e) {
    console.log(list, todo, e);
    console.log(e.target.value);
    this.todoLists[list].todos[todo].text = e.target.value;
    this.setState({ todoList: this.todoLists });
  }
  todoOnCheck(list, todo, e) {
    console.log(e.target.checked);
    this.todoLists[list].todos[todo].done = e.target.checked;
    this.setState({ todoList: this.todoLists });
  }
  todoAdd(list) {
    this.todoLists[list].todos.push({ text:'', done: false });
    this.setState({ todoList: this.todoLists });
  }
  todoDelete(list, todo) {
    this.todoLists[list].todos.splice(todo, 1);
    this.setState({ todoList: this.todoLists });
  }

  render() {
    const todoLists = this.todoLists.map((list, index) =>
      <TodoList
        app={this}
        listIndex={index}
        todoAdd={this.todoAdd.bind(this,index)}
        listDelete={this.listDelete.bind(this,index)}
        titleOnChange={this.titleOnChange}
        todoOnClick={this.todoOnClick}
        todoOnChange={this.todoOnChange}
        todoOnCheck={this.todoOnCheck}
        todoDelete={this.todoDelete}
        todoList={list}
      >
      </TodoList>
    );
    return (
      <div className="App">
        <button onClick={this.listAdd.bind(this)}>＋</button>
        {todoLists}
      </div>
    );
  }
};

export default App;
