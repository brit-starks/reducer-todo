import React, { useState, useReducer} from 'react';
import tasks from './data';
import { reducer, initialState } from './reducers/reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import '../src/scss/App.scss';

function App() {

  const [todo] = useState(tasks);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (e, todo) => {
    e.preventDefault();
    console.log(e, todo)
    dispatch({type:'ADD_TODO', payload: todo})
  }

  return (
    <div className="App">
      <h1>Todo Reducer</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList state={state.todos}/>
    </div>
  );
}

export default App;
