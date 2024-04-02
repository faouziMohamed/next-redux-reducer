import { NextRequest, NextResponse } from "next/server";
import { addTodo, getTodos } from "@/server/services/todos.services";
import { Todo } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET(_: NextRequest) {
  const todos = await getTodos();
  return NextResponse.json(todos || []);
}

export async function POST(req: NextRequest) {
  const todo = (await req.json()) as Todo;
  if (!todo) {
    return NextResponse.json({ message: "Todo is required!" }, { status: 400 });
  }
  const todos = await getTodos();
  const newId = todos.length ? todos.length + 1 : 1;
  const newTodo: Todo = { ...todo, id: newId.toString(), addedAt: new Date() };
  const added = await addTodo(newTodo);
  return NextResponse.json(added, { status: 201 });
}
