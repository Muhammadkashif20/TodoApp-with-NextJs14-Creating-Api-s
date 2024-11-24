import React from 'react'

const page = async() => {
    let getData=await fetch('http://localhost:3000/api/todos',{cache:'no-cache'})
    getData=await getData.json()
  return (
    <div>
        <div className='flex justify-center m-5'>
            <input type='text'
             placeholder='Enter Your Todos'
             maxLength={18}
             className='border outline-none border-gray-200 rounded-md p-3 w-96'
             />
             <button className='bg-blue-500 rounded w-24 text-white hover:bg-blue-600 ms-3'>Add Todo</button>
        </div>
      {getData.data?.map((todo)=>{
        return(
            <div key={todo.id} className='flex justify-center m-5'>
            <h1 className='border border-blue-400 rounded p-3 w-96 flex justify-between'>{todo.title}
                </h1>
            </div>
        )
      })}
    </div>
  )
}

export default page
