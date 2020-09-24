import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext)
    const title = state.todos.length > 0 
        ? `${state.todos.length} Todos` :
        "Nothing To Do!"

    return (
        <div className="container mx-auto max-w-md font-mono p-8 tracking-wide">
            <h1 className="text-5xl border-b-4 border-double border-black">{title}</h1>
            <ul className="list-reset p-0 mt-10">
                {state.todos.map((todo) => (
                    <li key={todo.id} className="">
                        <div className="flex text-xl my-5">
                            <button 
                                className="flex items-center flex-1 focus:outline-none"
                                onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}>
                                <span className="material-icons mr-2">{ todo.complete ? "check_circle_outline" : "radio_button_unchecked" }</span>
                                <span className={`${todo.complete && "line-through text-gray-900"}`}>{todo.text}</span>
                            </button>
                            <button className="flex items-center">
                                <span className="material-icons text-gray-600">create</span>
                            </button>
                            <button className="flex items-center">
                                <span className="material-icons text-gray-600">delete</span>
                            </button>
                        </div>
                        <span className="text-gray-500 text-sm">*******************************************</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}