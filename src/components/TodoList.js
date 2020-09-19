import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
    const { state } = useContext(TodosContext)
    const title = state.todos.length > 0 
        ? `${state.todos.length} Todos` :
        "Nothing To Do!"

    return (
        <div className="container mx-auto max-w-md text-center font-sans bg-yellow-300">
            <h1 className="font-bold text-3xl">{title}</h1>
            <ul className="list-reset text-white p-0 bg-orange-500">
                {state.todos.map((todo) => (
                    <li key={todo.id} className="my-2 py-4">
                        <span className="cursor-pointer">{todo.text}</span>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}