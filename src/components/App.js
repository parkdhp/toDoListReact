import React, { Component } from 'react';
<<<<<<< HEAD
import '../styles/App.css';
import '../data/todoData';
import ToDoList from '../components/ToDoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: window.dummyTodos,
    }
  }
=======
import logo from '../img/logo.svg';
import '../styles/App.css';

class App extends Component {
>>>>>>> 92b44be689064fb3d45a8ceccec825b6a2a1d6d0
  render() {
    return (
      <div className="App">
        <header>
<<<<<<< HEAD
          <h1>To Do List</h1>
        </header>
        <ul>
          <ToDoList todos={this.state.todos}/>
=======
          <h1>Hello</h1>
        </header>
        <ul>
          <li></li>
>>>>>>> 92b44be689064fb3d45a8ceccec825b6a2a1d6d0
        </ul>
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 92b44be689064fb3d45a8ceccec825b6a2a1d6d0
