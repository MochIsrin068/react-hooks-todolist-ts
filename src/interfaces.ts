// Todo Interface

export interface TodoInterface{
    id : string,
    text : string ,
    isCompleted : boolean
}

// Todo form interface
export interface TodoFormInterface {
    todos : TodoInterface[], // [ TodoInterface ]
    handleTodoCreate : (todo : TodoInterface) => void
}

// Todo List Interface
export interface TodoListInterface{
    handleTodoUpdate : (event : React.ChangeEvent<HTMLInputElement>, id : string) => void,
    handleTodoRemove : (id : string) => void,
    handleTodoComplete : (id : string) => void,
    handleTodoBlur : (event : React.ChangeEvent<HTMLInputElement>) => void,
    todos : TodoInterface[] // [TodoInterface]
}

// Todo item Interface
export interface TodoItemInterface{
    handleTodoUpdate : (event : React.ChangeEvent<HTMLInputElement>, id : string) => void,
    handleTodoRemove : (id : string) => void,
    handleTodoComplete : (id : string) => void,
    handleTodoBlur : (event : React.ChangeEvent<HTMLInputElement>) => void,
    todo : TodoInterface
}

// Todo Header Count

export interface TodoItemCount {
    count : number
}