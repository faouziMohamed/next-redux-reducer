import { Todo } from "@/lib/types";

const DB_SERVER_URL = "http://localhost:8000";

export async function getTodos() {
  const response = await fetch(`${DB_SERVER_URL}/todos?_sort=-id`);
  return (await response.json()) as Todo[];
}

export async function addTodo(todo: Todo) {
  const response = await fetch(`${DB_SERVER_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return (await response.json()) as Todo;
}

export async function updateToDo(id: string, todo: Todo) {
  try {
    todo.updatedAt = new Date();
    const response = await fetch(`${DB_SERVER_URL}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      console.log("Error", response);
      return { message: "Error trashing todo" };
    }
    return (await response.json()) as Todo;
  } catch (e) {
    console.log("Error", e);
    return { message: "Error trashing todo" };
  }
}
