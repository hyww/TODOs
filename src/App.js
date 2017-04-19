import React from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.todoLists = [{ todos: [], title: 'TODO list' }];
    this.state = { todoList: this.todoLists, todos: 0, dones: 0 };
  }

  listAdd() {
    this.todoLists.push({ todos: [] , title: 'New list' });
    this.setState({ todoList: this.todoLists });
  }
  listDelete(list) {
    const todos = this.state.todos - this.todoLists[list].todos.length;
    const dones = this.state.dones - this.todoLists[list].todos.filter( a => a.done ).length;
    this.todoLists.splice(list, 1);
    this.setState({ todoList: this.todoLists, todos, dones });
  }
  titleOnChange(list, e) {
    this.todoLists[list].title = e.target.value;
    this.setState({ todoList: this.todoLists });
  }
  todoOnChange(list, todo, e) {
    this.todoLists[list].todos[todo].text = e.target.value;
    this.setState({ todoList: this.todoLists });
  }
  todoOnCheck(list, todo, e) {
    this.todoLists[list].todos[todo].done = e.target.checked;
    this.setState({ todoList: this.todoLists, dones: this.state.dones + (e.target.checked ? 1 : -1) });
  }
  todoAdd(list) {
    this.todoLists[list].todos.push({ text:'', done: false });
    this.setState({ todoList: this.todoLists, todos: this.state.todos + 1 });
  }
  todoDelete(list, todo) {
    let todoList = this.todoLists[list].todos;
    const dones = this.state.dones - (todoList[todo].done ? 1 : 0);
    const todos = this.state.todos - 1;
    todoList.splice(todo, 1);
    this.setState({ todoList: this.todoLists, todos, dones });
  }

  render() {
    const todoLists = this.todoLists.map((list, index) =>
      <TodoList
        app={this}
        listIndex={index}
        todoAdd={this.todoAdd.bind(this,index)}
        listDelete={this.listDelete.bind(this,index)}
        titleOnChange={this.titleOnChange}
        todoOnChange={this.todoOnChange}
        todoOnCheck={this.todoOnCheck}
        todoDelete={this.todoDelete}
        todoList={list}
      >
      </TodoList>
    );
    return (
      <div className="App">
        <div className="header">
          <span>TODOs</span> <span title="no. of TODOs done.">{this.state.dones}</span><span title="no. of TODOs"> / {this.state.todos}</span>
          <button onClick={this.listAdd.bind(this)}>＋</button>
        </div>
        {todoLists}
      </div>
    );
  }
};

export default App;
