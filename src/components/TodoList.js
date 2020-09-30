import React, { useContext } from 'react'
import Todo from './Todo'
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
                        <Todo todo={todo}/>
                        <form className="flex my-5">
                            <input 
                                className="border-b-2 border-double border-black focus:outline-none flex-1 mr-4"
                                type="text"/>
                            <button className="border-2 border-solid border-gray-900 text-lg text-gray-900 uppercase w-2/5 h-12 tracking-wider">Edit Todo</button>
                        </form>
                        <span className="text-gray-500 text-sm">*******************************************</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}