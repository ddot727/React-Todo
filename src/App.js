import React from 'react';
import TodoList from './components/ToDoComponents/ToDoList';
import TodoForm from './components/ToDoComponents/ToDoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
      todo: ''
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
      </div>
    );
  }
}

export default App;
