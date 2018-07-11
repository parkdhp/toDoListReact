import React from 'react';
import ToDoListEntry from './ToDoListEntry';

let ToDoList = (props) => {
  return (
    <div>
      {
        props.todos.map((todo, i) => 
          <ToDoListEntry key={i} index={i} todo={todo} onclick={props.onclick}/>
        )
      }
    </div>
  )
}

export default ToDoList;