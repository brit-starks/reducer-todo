import React, { useState } from 'react';
import '../scss/form.scss';


const TodoForm = ({ addTodo }) => {

  const [task, setTask] = useState('');

  const handleChange = e => {
  setTask(e.target.value);
};

  return(
    <form className='form'>
      <input 
        type='text'
        name='task'
        value={task}
        onChange={handleChange}
        className='input'
      />
      <button onClick={(e) => addTodo(e, task)} className='add-btn'> Add Todo</button>
    </form>
  )
}

export default TodoForm;