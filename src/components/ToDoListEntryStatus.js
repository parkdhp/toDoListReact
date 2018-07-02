import React from 'react';

let Status = (props) => {
  if(props.todo === true) {
    return (<div id="status">Done</div>)
  } else {
    return (<div id="status">Not Done</div>)
  }
}

export default Status;