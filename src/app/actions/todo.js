'use server'
import { revalidatePath } from "next/cache";
export async function addTodo(formData) {
    const todo=formData.get('todo')
    console.log('todo=>',todo);
try {
    await fetch('http://localhost:3000/api/todos',{
        method:'POST',
        body:JSON.stringify({title:todo})
    })
    revalidatePath('/todo')
} catch (error) {
    console.log('error=>',error);
}
}
  // UbdateTodo Request For Todo
  export async function ubdateTodo(obj) {
try {
    await fetch('http://localhost:3000/api/todos',{
        method:'POST',
        body:JSON.stringify(obj)
    })
    revalidatePath('/todo')
} catch (error) {
    console.log('error=>',error);
}
}