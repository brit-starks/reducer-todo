import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';


const TodoForm = () => {

  const [task, setTask] = useState('');

const handleChange = e => {
  setTask(e.target.value);
}

  const [state, dispatch] = useReducer(initialState, reducer);
  console.log(state);

  return(
    <form>
      <input 
        type='text'
        name='task'
        value={task}
        onChange={handleChange}
      />
      <button onClick={() => dispatch({type: "ADD_TODO", payload: task})}> Add Todo</button>
    </form>
  )
}

export default TodoForm;