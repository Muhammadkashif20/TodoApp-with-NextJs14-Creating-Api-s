'use client'
import { useRef } from "react";
import { addTodo } from "../actions/todo";
    const TodoForm = () => {
       const formRef=useRef(null)
    return (
        <div>
            <form ref={formRef} 
                action={async(formData)=>{
                await addTodo(formData);
                formRef.current?.reset();}} className="flex justify-center m-5">
            <input
            type="text"
            placeholder="Enter Your Todos"
            maxLength={18}
            name="todo"
            className="border outline-none border-gray-200 rounded-md p-3 w-96"
            />
            <input type="submit" className="bg-blue-500 rounded w-24 text-white hover:bg-blue-600 ms-3" value={"Add Todo"}/>
        </form>
        </div>
    )
    }

    export default TodoForm
