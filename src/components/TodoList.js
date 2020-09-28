import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext)
    const filteredTodos = state.todos.filter((todo) => !todo.complete)
    const title = filteredTodos.length > 0 
        ? `${filteredTodos.length} Todos` :
        "Nothing To Do!"

    const handleDelete = (todo) => {
        dispatch({ type: "DELETE_TODO", payload: todo })
    }

    console.log(state)

    return (
        <div>
            <h4 className="text-5xl border-b-4 border-double border-black">{title}</h4>
            <ul className="list-reset p-0 mt-10">
                {state.todos.map((todo) => (
                    <li key={todo.id}>
                        <div className="flex text-xl my-5">
                            <button 
                                className="flex items-center flex-1 focus:outline-none"
                                onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}>
                                <span className="material-icons mr-2">{ todo.complete ? "check_circle_outline" : "radio_button_unchecked" }</span>
                                <span className={`${todo.complete && "line-through text-gray-900"} tracking-wide`}>{todo.text}</span>
                            </button>
                            <button 
                                className="flex items-center mr-5"
                                onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo })}>
                                <span className="material-icons text-gray-600">create</span>
                            </button>
                            <button 
                                className="flex items-center focus:outline-none"
                                onClick={() => handleDelete(todo)}>
                                <span className="material-icons text-gray-600">delete</span>
                            </button>
                        </div>
                        <form className="flex my-5 hidden">
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