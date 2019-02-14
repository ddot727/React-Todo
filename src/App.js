import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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

  addTodo = () => {
    const newTodos = [...this.state.todos]

    newTodos.push({task: this.state.task, id: Date.now(), completed: false})
    this.setState({todos: newTodos, task: ''})
  }

  handleChange = e => {
    console.log(e)
    this.setState({[e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        todos={this.state.todos} 
        />
        <TodoForm 
        addTodo={this.addTodo}
        handleChange={this.handleChange}
        task={this.state.task}/>
      </div>
    );
  }
}

export default App;
