import React from 'react';
import Status from './ToDoListEntryStatus';

let ToDoListEntry = (props) => {
  return (
    <div id="todo" onClick={() => props.onclick(props.index)}>
      <img src={props.todo.icon} id="img" alt=""></img>
      <div id="text">{props.todo.text}</div>
      <Status todo={props.todo.status} id="status" />
    </div>
  )
}

export default ToDoListEntry;