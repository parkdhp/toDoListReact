import React, { Component } from 'react';
import '../styles/App.css';
import '../data/todoData';
import ToDoList from '../components/ToDoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: window.dummyTodos,
      input: '',
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnClick(index) {
    let copy = this.state.todos.slice();
    copy.splice(index, 1);
    this.setState({
      todos: copy,
    })
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
  }
  handleOnSubmit() {
    if (this.state.input !== ''){
      let newTodo = {
        text: this.state.input,
        status: false,
      }
      let copy = this.state.todos.slice();
      copy.push(newTodo);
      this.setState({
        todos: copy,
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>To Do List</h1>
        </header>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.handleOnSubmit}>Submit</button>
        <ul>
          <ToDoList todos={this.state.todos} onclick={this.handleOnClick}/>
        </ul>
      </div>
    );
  }
}

export default App;
