import React, { useState } from 'react';

const TodoForm = () => {

  const [task, setTask] = useState('');

  // handleSubmit = e => {
  //   this.props.addTask(e, this.state.task);
  //   this.setState({ task: ""});
  // };

  // handleChange = e => {
  //   this.setState({
  //     task: e.target.value
  //   })
  // }

  return(
    <form onSubmit={this.handleSubmit}>
      <input 
        type='text'
        name='task'
        value={this.state.task}
        onChange={this.state.handleChange}
      />
      <button> Add Todo</button>
    </form>
  )
}

export default TodoForm;