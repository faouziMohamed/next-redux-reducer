import { Todo } from "@/lib/types";

export async function postNewTodo(todo: Todo) {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return (await response.json()) as Todo;
}

export async function getTodos() {
  const response = await fetch("/api/todos");
  return (await response.json()) as Todo[];
}

export async function removeTodo(todo: Todo) {
  const response = await fetch(`/api/todos/${todo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return (await response.json()) as Todo;
}

export async function restoreTodo(todo: Todo) {
  const response = await fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return (await response.json()) as Todo;
}

export async function updateTodo(todo: Todo) {
  const response = await fetch(`/api/todos/${todo.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return (await response.json()) as Todo;
}
