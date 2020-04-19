import * as React from 'react'
import {render} from 'react-dom'

import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'

import {TodoInterface} from './interfaces'
import './styles/styles.css'
import TodoHeader from './components/todo-header'


const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])

  // create new Todo item
  const handleTodoCreate = (todo : TodoInterface) => {
    // prepare new todos state
    const newTodosState : TodoInterface[] = [...todos]


    // update new todos state
    newTodosState.push(todo)

    // Update todos state
    setTodos(newTodosState)

  }


  // update existing todo item
  const handleTodoUpdate = (event : React.ChangeEvent<HTMLInputElement>, id :string) => {
    // Prepare new todo
    const newTodosState : TodoInterface[] = [...todos]

    // find correct todo item to update
    newTodosState.find((todo : TodoInterface) => todo.id === id)!.text = event.target.value

    // update todos state
    setTodos(newTodosState)
  }

  // Remove existing todo item
  const handleTodoRemove = (id : string) => {
    const newTodosState : TodoInterface[] = todos.filter((todo : TodoInterface) => todo.id !== id)

    // Update todos state
    setTodos(newTodosState)
  }

  // Check existing todo item as completed
  const handleTodoComplete = (id: string) => {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

    // Update todos state
    setTodos(newTodosState)
  }

  // Check if todo item has title
  const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }

  return(
    <div className="todo-list-app">

      <TodoHeader count={todos.length}/>

      <TodoForm 
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />

      <TodoList 
        todos={todos}
        handleTodoBlur={handleTodoBlur}
        handleTodoComplete={handleTodoComplete}
        handleTodoRemove={handleTodoRemove}
        handleTodoUpdate={handleTodoUpdate}
        />
    </div>
  )
}

export default TodoListApp