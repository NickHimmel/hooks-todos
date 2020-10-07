import React, { useState, useContext, useEffect } from 'react'
import TodosContext from '../context'

export default function TodoEdit() {
    const [todo, setTodo] = useState("")
    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext)

    useEffect(() => {
        if(currentTodo.text) {
            setTodo(currentTodo.text)
        }
    }, [currentTodo.id])

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: "UPDATE_TODO", payload: todo })
        setTodo("")
    }

    return (
        <form 
            className="flex items-end my-5 h-10"
            onSubmit={handleSubmit}>
            <input 
                className="border-b-2 border-double border-black focus:outline-none flex-1 mr-4 text-xl"
                type="text"
                onChange={event => setTodo(event.target.value)}
                value={todo}/>
            <button className="border-2 border-solid border-gray-900 text-lg text-gray-900 uppercase w-2/5 h-12 tracking-wider focus:outline-none">Update</button>
        </form>
    )
}

