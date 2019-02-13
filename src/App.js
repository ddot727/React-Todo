import React from 'react';
// import TodoList from './components/ToDoComponents/ToDoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      inputText: ''
    };

  }

  addTask = e => {
    e.prevent.preventDefault();
    const newTask = {
      task: this.state.name,
      id: Date.now(),
      completed: false
    }
  }

  handleChanges = e => {
    this.setState({ inputText: e.target.value })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* <TodoList /> */}
        <TodoForm />
      </div>
    );
  }
}

export default App;
