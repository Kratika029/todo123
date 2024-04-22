import React, {useState} from 'react'
// import {useDispatch} from "react-redux"
import { useDispatch } from 'react-redux'
import {addTodo} from "../features/todo/TodoSlice"

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
  return (
    <div>
      
        <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder='add Task' 
            // />
            value = {input}
             onChange = {(e)=> { setInput(e.target.value)}}/> 
            
            <button type = "submit">add</button>
        </form>
    </div>
  )
}

export default AddTodo