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
        <form 
            onSubmit={handleSubmit}
            className="flex my-5">
            <input
                className="border-b-2 border-double border-black focus:outline-none flex-1 mr-4 text-xl"
                type="text"
                onChange={event => setTodo(event.target.value)} 
                value={todo}/>
            <button className="border-2 border-solid border-gray-900 text-lg text-gray-900 uppercase w-2/5 h-12 tracking-wider focus:outline-none">Add todo</button>
        </form>
    )
}