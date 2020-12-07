import { ToastType } from "./ToastType";

export interface Toast {
  id: string;
  msg: string;
  type: ToastType;
}
