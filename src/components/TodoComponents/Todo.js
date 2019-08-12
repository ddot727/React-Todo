import React from 'react';

const Todo = props => {
    return (
       <div 
            className={`todo ${props.todo.completed ? 'completed' : null}`}
            onClick={() => props.toggleTask(props.todo.id)}>
            
            <h2>{props.todo.task}</h2>
       </div>
    )
}

export default Todo;