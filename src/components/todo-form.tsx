import * as React from 'react'
import shortId from 'shortid'
import {TodoFormInterface, TodoInterface} from '../interfaces'
import { create } from 'domain'

const TodoForm = ( props : TodoFormInterface) => {

    // create ref for form input
    const inpuRef = React.useRef<HTMLInputElement>(null)

    // create form state
    const [formState, setFormState] = React.useState('')

    // Handle Todo Input Change
    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement> ) => {
        setFormState(event.target.value)
    }

    // handle 'Enter' into Todo Input
    const handleInputEnter = (event : React.KeyboardEvent) => {
        // check for enter key
        if(event.key === 'Enter'){
            const newTodo : TodoInterface = {
                id : shortId.generate(),
                text : formState,
                isCompleted : false
            }

            // create new todo item
            props.handleTodoCreate(newTodo)

            // Reset the input field
            if(inpuRef && inpuRef.current){
                inpuRef.current.value = ""
            }
        }


    }
 

    return(
        <div className="todo-form">
            <input
                ref={inpuRef}
                type="text"
                placeholder="Enter new Todo"
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default TodoForm