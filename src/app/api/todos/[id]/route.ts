import { NextRequest, NextResponse } from "next/server";
import { getOneToDo, updateToDo } from "@/server/services/todos.services";
import { Todo } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  if (Number.isNaN(parseInt(id)))
    return NextResponse.json(
      { message: "Invalid id or todo not found" },
      { status: 404 },
    );
  const todo = await getOneToDo(String(id));
  return NextResponse.json(todo);
}

export async function DELETE(
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  if (Number.isNaN(parseInt(id)))
    return NextResponse.json({ message: "Invalid id" }, { status: 400 });
  const todo = (await req.json()) as Todo;
  if (!todo) {
    return NextResponse.json({ message: "Todo is required!" }, { status: 400 });
  }
  todo.trashed = true;
  todo.trashedAt = new Date();
  const trashed = await updateToDo(String(id), todo);
  return NextResponse.json(trashed);
}

export async function PUT(
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  if (Number.isNaN(parseInt(id)))
    return NextResponse.json({ message: "Invalid id" }, { status: 400 });
  const todo = (await req.json()) as Todo;
  if (!todo) {
    return NextResponse.json({ message: "Todo is required!" }, { status: 400 });
  }
  todo.trashed = false;
  todo.trashedAt = null;
  const updated = await updateToDo(String(id), todo);
  return NextResponse.json(updated);
}

export async function PATCH(
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  if (Number.isNaN(parseInt(id)))
    return NextResponse.json({ message: "Invalid id" }, { status: 400 });
  const todo = (await req.json()) as Todo;
  if (!todo) {
    return NextResponse.json({ message: "Todo is required!" }, { status: 400 });
  }
  const updated = await updateToDo(String(id), todo);
  console.log(updated);
  return NextResponse.json(updated);
}
