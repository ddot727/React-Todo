import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input
            type="text"
            name="task"
            value={props.task}
            onChange={props.handleChanges}
            placeholder="What To Do?"
            />
            <button onClick={props.addTodo}>Add</button>
        </div>
    )
}

export default TodoForm;