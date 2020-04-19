import * as React from 'react'
import {TodoItemCount} from '../interfaces'

const TodoHeader = (props : TodoItemCount) => {
    return(
        <div className="header-container">
            <h2 className="title">Todo List App</h2>
            <p>{props.count === 0 ? "You don't have a todo" : `You have ${props.count} todo`}</p>
        </div>
    )
}

export default TodoHeader