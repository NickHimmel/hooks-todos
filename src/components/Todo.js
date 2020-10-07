import React, { useContext } from 'react';
import TodosContext from '../context'

export default function Todo({ todo }) {
    const { dispatch } = useContext(TodosContext)

    const handleDelete = (todo) => {
        dispatch({ type: "DELETE_TODO", payload: todo })
    }

    return (
        <div className="flex items-endei text-xl my-5 h-10">
            <div 
                className="flex items-center flex-1 focus:outline-none cursor-pointer"
                onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}>
                <button className="material-icons mr-2 focus:outline-none">{ todo.complete ? "check_circle_outline" : "radio_button_unchecked" }</button>
                <span className={`${todo.complete && "line-through text-gray-900"} tracking-wide`}>{todo.text}</span>
            </div>
            <button 
                className="flex items-center mr-5 focus:outline-none"
                onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo })}>
                <span className="material-icons text-gray-600">create</span>
            </button>
            <button 
                className="flex items-center focus:outline-none"
                onClick={() => handleDelete(todo)}>
                <span className="material-icons text-gray-600">delete</span>
            </button>
        </div>
    )
}