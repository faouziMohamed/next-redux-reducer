"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { TabName, Todos } from "@/lib/types";
import { useTabs } from "@/lib/utils/hooks";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
type AllTabNames = TabName | "all";

export function filterToDo(tab: AllTabNames, list: Todos) {
  let todos = list.todos;
  if (tab === "all") {
    return list.todos;
  }
  if (tab === "trash") {
    return list.todos.filter((todo) => todo.trashed);
  }
  if (tab === "done") {
    return list.todos.filter((todo) => todo.done && !todo.trashed);
  }
  if (tab === "today") {
    const today = new Date().getDate();
    return list.todos.filter(
      (todo) => new Date(todo.addedAt).getDate() === today && !todo.trashed,
    );
  }
  return todos.filter((todo) => !todo.trashed);
}

export function useTodos(tabName?: AllTabNames): Todos {
  const list = useAppSelector((state) => state.todoReducer);
  let tab: AllTabNames = useTabs();
  if (tabName) {
    tab = tabName;
  }
  return {
    todos: filterToDo(tab, list),
  };
}

export function useTheme() {
  return useAppSelector((state) => state.themeReducer);
}
