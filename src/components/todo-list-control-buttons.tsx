import { Todo } from "@/lib/types";
import {
  MdDelete,
  MdOutlineDone,
  MdOutlineSettingsBackupRestore,
} from "react-icons/md";
import { ReactNode, SyntheticEvent } from "react";
import {
  restoreTrashTodoActionAsync,
  toggleDoneAsync,
  trashTodoActionAsync,
} from "@/lib/redux/todo-slice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { IoCloseCircleSharp } from "react-icons/io5";

export function TodoListControlButtons({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();
  return (
    <span className={"flex "}>
      <IconButton
        className={"p-2 hover:bg-blue-400 group"}
        Icon={
          todo.done ? (
            <IoCloseCircleSharp className={"group-hover:text-slate-100"} />
          ) : (
            <MdOutlineDone className={"group-hover:text-slate-100"} />
          )
        }
        onClick={(e) => {
          dispatch(toggleDoneAsync(todo));
        }}
      />
      <IconButton
        className={"p-2 hover:bg-amber-400 group "}
        Icon={
          todo.trashed ? (
            <MdOutlineSettingsBackupRestore
              className={"group-hover:text-amber-800"}
            />
          ) : (
            <MdDelete className={"group-hover:text-amber-800"} />
          )
        }
        onClick={async (e) => {
          e.stopPropagation();

          dispatch(
            todo.trashed
              ? restoreTrashTodoActionAsync(todo)
              : trashTodoActionAsync(todo),
          );
        }}
      />
    </span>
  );
}

function IconButton({
  onClick,
  className = "",
  Icon,
}: {
  onClick: (e: SyntheticEvent) => void;
  className?: string;
  Icon: ReactNode;
}) {
  return (
    <span className={`rounded-full ${className}`} onClick={onClick}>
      {Icon}
    </span>
  );
}
