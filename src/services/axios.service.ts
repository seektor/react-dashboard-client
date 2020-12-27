import Axios from "axios";
import store from "../store/store";

Axios.interceptors.request.use((config) => {
  config.headers.Authorization = store.getState().authSlice.user?.token;
  return config;
});
