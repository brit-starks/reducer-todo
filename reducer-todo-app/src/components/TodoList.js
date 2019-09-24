import React from 'react';
import Todo from './Todo';

const TodoList = ({ todo }) => {
  console.log(todo);
  return(
    <div>
      <h2>Todo List</h2>
      {todo.map(data => (
        <p>{data.task}</p> 
      ))}
    </div>
  )
}

export default TodoList;