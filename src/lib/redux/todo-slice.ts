import { Todo, Todos } from "@/lib/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  postNewTodo,
  removeTodo,
  restoreTodo,
  updateTodo,
} from "@/client/services/todos.services";

const initialState: Todos = {
  todos: [],
};

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    initLocalListAction: (state, action: PayloadAction<Todos>) => {
      state.todos = action.payload.todos;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoActionAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(trashTodoActionAsync.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) => {
          return todo.id === action.payload.id ? action.payload : todo;
        });
      })
      .addCase(restoreTrashTodoActionAsync.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) => {
          return todo.id === action.payload.id ? action.payload : todo;
        });
      })
      .addCase(toggleDoneAsync.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) => {
          return todo.id === action.payload.id ? action.payload : todo;
        });
      });
  },
});

export const addTodoActionAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (value: string) => {
    const todo: Todo = {
      id: "0",
      title: value,
      done: false,
      trashed: false,
      addedAt: new Date(),
      updatedAt: new Date(),
      doneAt: null,
      trashedAt: null,
    };
    return await postNewTodo(todo);
  },
);

export const trashTodoActionAsync = createAsyncThunk(
  "todos/trashTodoAsync",
  async (todo: Todo) => {
    return await removeTodo(todo);
  },
);

export const restoreTrashTodoActionAsync = createAsyncThunk(
  "todos/restoreTrashTodoAsync",
  async (todo: Todo) => {
    return await restoreTodo(todo);
  },
);

export const toggleDoneAsync = createAsyncThunk(
  "todos/doneTodoAsync",
  async (todo: Todo) => {
    const toUpdate = { ...todo, done: !todo.done, doneAt: new Date() };
    return await updateTodo(toUpdate);
  },
);

export const updateAsync = createAsyncThunk(
  "todos/updateDescriptionAsync",
  async (todo: Todo) => {
    return await updateTodo(todo);
  },
);

export const { initLocalListAction } = todoSlice.actions;
const { reducer: todoReducer } = todoSlice;
export default todoReducer;
