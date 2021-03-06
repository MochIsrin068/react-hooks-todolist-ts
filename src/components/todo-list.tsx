import * as React from 'react'
import TodoItem from './todo-item'
import {TodoListInterface} from '../interfaces'

const TodoList = (props : TodoListInterface) => {
    return(
        <div className="todo-list">
            <ul>
                {props.todos.map(todo => (
                    <li key={todo.id}>
                        <TodoItem
                            handleTodoBlur={props.handleTodoBlur}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoUpdate={props.handleTodoUpdate}
                            todo={todo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList