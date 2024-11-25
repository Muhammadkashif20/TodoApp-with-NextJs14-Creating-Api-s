import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
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
          <TodoList  todo={todo} key={todo.id}/>
        );
      })}
    </div>
  );
};

export default page;
