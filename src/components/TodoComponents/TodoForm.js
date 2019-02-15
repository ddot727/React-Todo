import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input
            type="text"
            name="task"
            value={props.task}
            onChange={props.handleChange}
            placeholder="What To Do?"
            />
            <button onClick={props.addTodo}>Add</button>
            <button onClick={props.clearTodo}>Clear</button>
        </div>
    )
}

export default TodoForm;