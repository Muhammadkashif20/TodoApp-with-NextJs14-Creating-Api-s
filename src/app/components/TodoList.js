'use client'
import React from 'react'
import { ubdateTodo } from '../actions/todo';
const TodoList = ({todo}) => {
  const isCompleted=async()=>{
    let obj={...todo};
    obj.completed=!obj.completed
    await ubdateTodo(obj)
  }
  const Edit=async()=>{}
  const Delete=async()=>{}
  return (
    <div>
      <div key={todo.id} className="flex justify-center m-5">
            <div className={`border border-blue-400 rounded p-3 w-1/3 flex justify-between items-center ${todo.completed?'bg-green-50':'bg-white'}`}>
              <span>{todo.title}</span>
              <div className="flex gap-2">
                <button onClick={isCompleted} className="bg-green-500 text-white rounded px-3 py-1 hover:bg-green-600">
                 {!todo.completed?'Done':'NotDone'}
                </button>
                <button className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default TodoList
