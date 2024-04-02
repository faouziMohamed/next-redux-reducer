import { getOneToDo } from "@/server/services/todos.services";
import { TitleAndSubTitle } from "@/components/title-and-sub-title";
import { Divider } from "@/components/divider";
import { formattedDate } from "@/lib/utils/operations";
import { Todo } from "@/lib/types";
import { ToDoDescription } from "@/components/todo-description";

type PageParams = {
  params: { id: string };
};

export default async function TodoPage({ params: { id } }: PageParams) {
  if (Number.isNaN(Number(id))) {
    return <ToDoNotFound id={id} />;
  }
  const todo = await getOneToDo(id);
  if (!todo) {
    return <ToDoNotFound id={String(id)} />;
  }

  return (
    <main className={"basis-3/4 overflow-y-auto"}>
      <div className={"py-4 px-4"}>
        <TitleAndSubTitle />
        <Divider />
        <div className={"py-4 w-full"}>
          <TodoOverview todo={todo} />
          <ToDoDescription todo={todo} />
        </div>
      </div>
    </main>
  );
}

function TodoOverview(props: { todo: Todo }) {
  return (
    <div>
      <h2
        className={
          "text-lg border bg-blue-50 rounded-lg text-blue-900 px-4 py-2"
        }
      >
        {props.todo.title}
      </h2>
      <div className={"flex gap-1 justify-between w-full"}>
        <span className={"text-xs text-end flex text-gray-600 italic"}>
          Created at {formattedDate(props.todo.addedAt)}
        </span>

        {!!props.todo.updatedAt && (
          <span
            className={
              "text-xs text-end px-2 py-0.5 flex bg-pink-50 text-gray-600 italic"
            }
          >
            Last update {formattedDate(props.todo.updatedAt)}
          </span>
        )}
      </div>
    </div>
  );
}

function ToDoNotFound(props: { id: string }) {
  return (
    <div
      className={
        "relative flex items-center justify-center w-full h-full text-center"
      }
    >
      <span
        className={
          "bg-amber-500 p-5 rounded-2xl font-bold text-xl text-slate-100"
        }
      >
        Unable to find the requested todo with id `{props.id}` 😢
      </span>
    </div>
  );
}
