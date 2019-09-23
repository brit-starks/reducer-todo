// import React from 'react';

export const initialState = {
  todos : [{
  todo: 'add todo',
  id: 1234,
  complete: false
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO' : {
      const newTodo = {
        todo: action.payload,
        id: Date.now(),
        complete: false
      };
      return {
        ...state, todos: [state.todos, newTodo]
      }
    }
    default:
      return state;
  }
}
