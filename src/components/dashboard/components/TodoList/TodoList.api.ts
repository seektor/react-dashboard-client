import Axios, { AxiosResponse } from "axios";
import { API_TODOS } from "../../../../constants/api.constants";
import { TodoData } from "./TodoList.types";

const fetchTodosData = (): Promise<
  AxiosResponse<{
    data: TodoData[];
  }>
> =>
  Axios.get<{
    data: TodoData[];
  }>(`${API_TODOS}`);

const createTodo = (
  title: string,
  description: string
): Promise<
  AxiosResponse<{
    data: TodoData;
  }>
> =>
  Axios.post<{
    data: TodoData;
  }>(`${API_TODOS}`, { title, description });

const removeTodo = (id: string): Promise<AxiosResponse<{}>> =>
  Axios.delete(`${API_TODOS}/${id}`);

const TodoListApi = { fetchTodosData, createTodo, removeTodo };

export default TodoListApi;
