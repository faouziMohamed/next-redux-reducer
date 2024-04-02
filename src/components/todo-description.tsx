"use client";

import { Todo } from "@/lib/types";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";
import { updateAsync } from "@/lib/redux/todo-slice";

export function ToDoDescription({ todo }: { todo: Todo }) {
  const [description, setDescription] = useState(todo.description || "");
  const dispatch = useAppDispatch();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateAsync({ ...todo, description }));
  };
  return (
    <form
      className={"flex flex-col gap-1 items-start pt-4"}
      onSubmit={onSubmit}
    >
      <h3 className={"text-lg font-bold text-blue-900"}>Description</h3>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={"w-full border border-gray-400 rounded-xl px-2 py-1 text-lg"}
      />
      <button
        type={"submit"}
        className={
          "bg-blue-500 text-white px-4 py-1 uppercase font-bold rounded-xl"
        }
      >
        Update description
      </button>
    </form>
  );
}
