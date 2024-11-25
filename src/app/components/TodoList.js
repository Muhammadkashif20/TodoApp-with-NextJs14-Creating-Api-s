"use client";
import React, { useState } from "react";
import { deleteTodo, ubdateTodo } from "../actions/todo";
const TodoList = ({ todo }) => {
  const [isEdit, SetIsEdit] = useState(false);
  const [taskTodo, SetTaskTodo] = useState("");
  const isCompleted = async () => {
    let obj = { ...todo };
    obj.completed = !obj.completed;
    await ubdateTodo(obj);
  };
  const Edit = async () => {
    if (isEdit) {
      let obj = { ...todo, title: taskTodo };
      await ubdateTodo(obj);
      SetIsEdit(false);
      SetTaskTodo("");
    } else {
      SetIsEdit(true);
      SetTaskTodo(todo.title);
    }
  };
  const Delete = async (id) => {
    await deleteTodo({ id: todo.id });
  };
  return (
    <div>
      <div key={todo.id} className="flex justify-center m-5">
        <div
          className={`border border-blue-400 rounded p-3 w-1/3 flex justify-between items-center ${
            todo.completed ? "bg-green-50" : "bg-white"
          }`}
        >
          {isEdit ? (
            <input
              value={taskTodo}
              onChange={(e) => SetTaskTodo(e.target.value)}
              className="border outline-none border-gray-200 rounded-sm p-3 w-44"
            />
          ) : (
            <span>{todo.title}</span>
          )}
          <div className="flex gap-2">
            <button
              onClick={isCompleted}
              className="bg-green-500 text-white rounded px-3 py-1 hover:bg-green-600"
            >
              {!todo.completed ? "Done" : "NotDone"}
            </button>
            <button
              onClick={Edit}
              className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={Delete}
              className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
