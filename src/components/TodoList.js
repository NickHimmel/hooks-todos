import React, { useContext } from 'react'
import Todo from './Todo'
import TodoEdit from './TodoEdit'
import TodosContext from '../context'

export default function TodoList() {
    const { state } = useContext(TodosContext)
    const filteredTodos = state.todos.filter((todo) => !todo.complete)
    const title = filteredTodos.length > 0 
        ? `${filteredTodos.length} Todos` :
        "Nothing To Do!"
    
    return (
        <div>
            <h4 className="text-5xl border-b-4 border-double border-black">{title}</h4>
            <ul className="list-reset p-0 mt-10">
                {state.todos.map((todo) => (
                    <li key={todo.id}>
                        {state.currentTodo.id === todo.id 
                            ? <TodoEdit /> 
                            : <Todo todo={todo}/>         
                        }
                        <span className="text-gray-500 text-sm">*******************************************</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}