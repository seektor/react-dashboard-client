import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Toast } from "../../../types/Toast";
import { ToastType } from "../../../types/ToastType";

type InitialState = Toast[];

const initialState: InitialState = [];

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (
      state,
      action: PayloadAction<{ id: string; msg: string; type: ToastType }>
    ) => {
      const { id, msg, type } = action.payload;
      const toast: Toast = { id, msg, type };
      state.push(toast);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      return state.filter((toast) => toast.id !== idToRemove);
    },
  },
});

const { addToast, removeToast } = toastsSlice.actions;

export const showToast = createAsyncThunk(
  "toasts/showToast",
  async (payload: { msg: string; type: ToastType }, thunkAPI) => {
    const id = Date.now().toString();
    const { msg, type } = payload;
    thunkAPI.dispatch(addToast({ id, msg, type }));
    setTimeout(() => thunkAPI.dispatch(removeToast(id)), 6000);
  }
);

export default toastsSlice.reducer;
