import React, { useState, useReducer} from 'react';
import tasks from './data';
import { reducer, initialState } from './reducers/Reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import Todo from './components/Todo';

import '../src/scss/App.scss';

function App() {

  const [todo, setTodo] = useState(tasks);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (e, todo) => {
    e.preventDefault();
    dispatch({type:'ADD_TODO', payload: todo})
  }

  return (
    <div className="App">
      <h1>Todo Reducer</h1>
      <TodoList todo={todo}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
