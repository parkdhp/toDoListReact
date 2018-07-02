import React from 'react';
import Status from './ToDoListEntryStatus';

let ToDoListEntry = (props) => {
  return (
    <div id="todo">
      <img src={props.todo.icon} id="img" alt=""></img>
      <Status todo={props.todo.status} id="status" />
      <div id="text">{props.todo.text}</div>
    </div>
  )
}

export default ToDoListEntry;