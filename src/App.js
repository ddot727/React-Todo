import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor(props) {
    super(props);
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
      task: ''
    };

  }

  addTodo = e => {
    e.preventDefault();
    const newTodos = [...this.state.todos]
    newTodos.push({task: this.state.task, id: Date.now(), completed: false})
    this.setState({todos: newTodos, task: ''})
  }

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todos => !todos.completed)
    })
  }

  handleChange = e => {
    console.log(e)
    this.setState({[e.target.name]: e.target.value })
  }

  toggleTask = todosId => {
    this.setState({
      todos: this.state.todos.map(todos => {
        if (todosId === todos.id) {
          return {
            ...todos,
            completed: !todos.completed
          };
        }
        return todos;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        todos={this.state.todos}
        toggleTask={this.toggleTask} 
        />
        <TodoForm 
        addTodo={this.addTodo}
        clearTodo={this.clearTodo}
        handleChange={this.handleChange}
        task={this.state.task}/>
      </div>
    );
  }
}

export default App;
