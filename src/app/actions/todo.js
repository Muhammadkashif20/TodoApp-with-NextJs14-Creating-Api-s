"use server";
import { revalidatePath } from "next/cache";
export async function addTodo(formData) {
  const todo = formData.get("todo");
  console.log("todo=>", todo);
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: todo }),
    });
    revalidatePath("/todo");
  } catch (error) {
    console.log("error=>", error);
  }
}
// UbdateTodo Request For Todo
export async function ubdateTodo(obj) {
  console.log("obj=>", obj);
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "PUT",
      body: JSON.stringify(obj),
    });
    revalidatePath("/todo");
  } catch (error) {
    console.log("error=>", error);
  }
}
// DeleteTodo Request For Todo
export async function deleteTodo(obj) {
  console.log("obj=>", obj);
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "DELETE",
      body: JSON.stringify(obj),
    });
    revalidatePath("/todo");
  } catch (error) {
    console.log("error=>", error);
  }
}
