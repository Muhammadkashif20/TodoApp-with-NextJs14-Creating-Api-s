import React from "react";
import TodoForm from "../components/TodoForm";
const page = async () => {
  let getData = await fetch("http://localhost:3000/api/todos",{
    cache:'no-cache'
  });
  getData = await getData.json();
  return (
    <div>
    <TodoForm/>
      {getData.data?.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-center m-5">
            <div className="border border-blue-400 rounded p-3 w-1/3 flex justify-between items-center">
              <span>{todo.title}</span>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white rounded px-3 py-1 hover:bg-green-600">
                  Done
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
        );
      })}
    </div>
  );
};

export default page;
