import React from 'react';
import ToDoListEntry from './ToDoListEntry';

let ToDoList = (props) => {
  return (
    <div>
      {
        props.todos.map((todo, i) => 
          <ToDoListEntry key={i} todo={todo}/>
        )
      }
    </div>
  )
}

export default ToDoList;