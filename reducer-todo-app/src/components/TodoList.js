import React from 'react';
import '../scss/todo-list.scss';

const TodoList = ({ state }) => {
  // console.log();
  return(
    <div className='todo-list'> 
      <h2 className='todo-list-title'>Todo List</h2>
      {state.map(data => (
        // console.log(data)
        <p>{data.todo}</p> 
      ))}
    </div>
  )
}

export default TodoList;