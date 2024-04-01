"use client";
import store from "@/lib/redux/store";
import { Provider } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { Todo, Todos } from "@/lib/types";
import { getTodos } from "@/client/services/todos.services";
import { useIsMounted } from "@/lib/utils/hooks";
import { useAppDispatch } from "@/lib/redux/hooks";
import { initLocalListAction } from "@/lib/redux/todo-slice";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <InitProvider />
      {children}
    </Provider>
  );
}

function InitProvider() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const mounted = useIsMounted();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!mounted) return;
    getTodos().then((data) => setTodos(data));
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !todos.length) return;
    const grouped: Todos = { todos };
    dispatch(initLocalListAction(grouped));
  }, [dispatch, mounted, todos]);
  return null;
}
