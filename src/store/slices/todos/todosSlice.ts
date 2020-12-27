import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoData } from "../../../components/dashboard/components/TodoList/TodoList.types";
import { AlertType } from "../../../components/shared/Alert/Alert.types";
import { ToastData } from "../../../components/shared/ToastsDisplay/ToastsDisplay.types";

type InitialState = TodoData[];

const initialState: InitialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ title: string; type: AlertType }>
    ) => {
      const { id, msg, type } = action.payload;
      const toast: ToastData = { id, msg, type };
      state.push(toast);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      return state.filter((toast) => toast.id !== idToRemove);
    },
  },
});

const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
