import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/lib/redux/todo-slice";
import themeReducer from "@/lib/redux/theme-slice";

const store = configureStore({
  reducer: { todoReducer, themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
