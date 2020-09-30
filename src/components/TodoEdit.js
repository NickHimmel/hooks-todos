import React from 'react'

export default function TodoEdit() {
    return (
        <form className="flex my-5">
            <input 
                className="border-b-2 border-double border-black focus:outline-none flex-1 mr-4"
                type="text"/>
            <button className="border-2 border-solid border-gray-900 text-lg text-gray-900 uppercase w-2/5 h-12 tracking-wider">Edit Todo</button>
        </form>
    )
}

