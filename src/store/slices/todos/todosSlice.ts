import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoData } from "../../../components/dashboard/components/TodoList/TodoList.types";

type InitialState = TodoData[];

const initialState: InitialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      const { title, content } = action.payload;
      const toast: TodoData = { id: Date.now().toString(), title, content };
      state.push(toast);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      return state.filter((toast) => toast.id !== idToRemove);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
