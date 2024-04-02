import { TabName } from "@/lib/types";
import { useTodos } from "@/lib/redux/hooks";
import { capitalize, formattedDate } from "@/lib/utils/operations";
import { TodoListControlButtons } from "@/components/todo-list-control-buttons";

export function TodoList({ tab }: { tab: TabName }) {
  const grouped = useTodos();

  return (
    <div className={"py-4 flex flex-col gap-1 overflow-y-auto"}>
      {grouped.todos.map((todo) => (
        <a
          href={`/todo/${todo.id}`}
          className={
            "px-3 py-1 bg-slate-100 border text-start hover:bg-pink-100 rounded-lg active:bg-pink-200 focus:bg-pink-200 flex justify-between items-center " +
            (todo.done ? "bg-slate-300" : "")
          }
          key={todo.id}
        >
          <span className={"flex flex-col"}>
            <span className={todo.done ? "line-through" : ""}>
              {" "}
              {capitalize(todo.title)}
            </span>
            <span className={"text-xs text-gray-600 italic"}>
              {formattedDate(todo.addedAt)}
            </span>
          </span>

          <TodoListControlButtons todo={todo} />
        </a>
      ))}
    </div>
  );
}
