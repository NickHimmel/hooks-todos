import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
    const { state } = useContext(TodosContext)
    const title = state.todos.length > 0 
        ? `${state.todos.length} Todos` :
        "Nothing To Do!"

    return (
        <div className="container mx-auto max-w-md font-mono p-8 tracking-wide">
            <h1 className="text-5xl border-b-4 border-double border-black">{title}</h1>
            <ul className="list-reset p-0 mt-10">
                {state.todos.map((todo) => (
                    <li key={todo.id} className="">
                        <div className="flex items-center text-xl my-5">
                            <button className="flex mr-2">
                                <span className="material-icons">radio_button_unchecked</span>
                            </button>
                            <span className="flex-1 cursor-pointer">{todo.text}</span>
                            <button className="flex">
                                <span className="material-icons text-gray-600">create</span>
                            </button>
                        </div>
                        <span className="text-gray-500 text-sm">*******************************************</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}