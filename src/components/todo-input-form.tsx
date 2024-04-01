import { FormEvent, useState } from "react";
import { addTodoActionAsync } from "@/lib/redux/todo-slice";
import { useAppDispatch } from "@/lib/redux/hooks";

export function TodoInputForm() {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") return;
    try {
      dispatch(addTodoActionAsync(value));
    } catch (e) {
      console.error(e);
      return;
    }
    setValue("");
  };
  return (
    <form onSubmit={onSubmit} className={"flex flex-col gap-1.5 items-start"}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={"w-full border border-gray-400 rounded-xl px-2 py-1 text-lg"}
      />
      <button
        type={"submit"}
        className={
          "bg-blue-500 text-white px-4 py-1 font-bold rounded-lg disabled:opacity-50"
        }
        disabled={value.trim() === ""}
      >
        Add
      </button>
    </form>
  );
}
