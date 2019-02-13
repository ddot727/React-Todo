import React from 'react';

const TodoForm = props =>{
    return (
        <form onSubmit={props.addTask}>
            <input
            type="text"
            value={props.task}
            name="inputText"
            onChange={props.handleChanges}
            placeholder="What To Do?"
            />
            <button type="submit">Add Todo</button>
        
        </form>
    )
}

export default TodoForm;