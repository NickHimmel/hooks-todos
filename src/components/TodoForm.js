import React, { useState, useContext } from 'react'
import TodosContext from '../context'

export default function TodoForm() {
    const [todo, setTodo] = useState("") 
    const { dispatch } = useContext(TodosContext)

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: todo })
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="border-2 border-solid border-black p-2 focus:outline-none mr-1 h-12"
                type="text"
                onChange={event => setTodo(event.target.value)} 
                value={todo}/>
            <button className="bg-gray-900 text-lg text-white uppercase px-4 h-12 tracking-wider">Add todo</button>
        </form>
    )
}