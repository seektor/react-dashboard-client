import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { FunctionComponent, useEffect, useState } from "react";
import { showToast } from "../../../../store/slices/toasts/toastsSlice";
import { useAppDispatch } from "../../../../store/store";
import { AlertType } from "../../../shared/Alert/Alert.types";
import Button from "../../../shared/Button/Button";
import { ButtonSize } from "../../../shared/Button/Button.types";
import TodoListApi from "./TodoList.api";
import S from "./TodoList.styled";
import { TodoData } from "./TodoList.types";
import TodoListCreateTodoFormModal from "./TodoListCreateTodoFormModal/TodoListCreateTodoFormModal";
import TodoListViewTodoModal from "./TodoListViewTodoModal/TodoListViewTodoModal";

const TodoList: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const [todos, setTodos] = useState<TodoData[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [createFormOpened, setCreateFormOpened] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoData | null>(null);

  const createTodo = async (
    title: string,
    description: string
  ): Promise<void> => {
    try {
      setLoadingData(true);
      setCreateFormOpened(false);
      const response = await TodoListApi.createTodo(title, description);
      setTodos((todos) => [response.data.data, ...todos]);
      dispatch(showToast({ message: "Todo Created", type: AlertType.Success }));
    } catch (error) {
      dispatch(
        showToast({
          message: error.response?.data.message || error.message,
          type: AlertType.Error,
        })
      );
    } finally {
      setLoadingData(false);
    }
  };

  const removeTodo = async (): Promise<void> => {
    try {
      if (!selectedTodo) {
        return;
      }
      const id = selectedTodo.id;
      setLoadingData(true);
      setSelectedTodo(null);
      await TodoListApi.removeTodo(id);
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
      dispatch(showToast({ message: "Todo Removed", type: AlertType.Success }));
    } catch (error) {
      dispatch(
        showToast({
          message: error.response?.data.message || error.message,
          type: AlertType.Error,
        })
      );
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingData(true);
        const response = await TodoListApi.fetchTodosData();
        setTodos(response.data.data);
      } catch (error) {
        dispatch(
          showToast({
            message: error.response?.data.message || error.message,
            type: AlertType.Error,
          })
        );
      } finally {
        setLoadingData(false);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderTitle>TODO</S.HeaderTitle>

        <AnimateSharedLayout type="switch">
          <motion.div layoutId="create-todo" layout={false}>
            <Button
              disabled={loadingData}
              buttonSize={ButtonSize.Small}
              onClick={() => setCreateFormOpened(true)}
            >
              Create
            </Button>
          </motion.div>

          <AnimatePresence>
            {createFormOpened && (
              <TodoListCreateTodoFormModal
                onCancel={() => setCreateFormOpened(false)}
                onCreate={createTodo}
              />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </S.HeaderContainer>

      <S.TodoList>
        <AnimateSharedLayout type="crossfade">
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              whileHover={{ scale: 1.1 }}
              layoutId={todo.id}
              onClick={() => setSelectedTodo(todo)}
            >
              <S.TodoItem>
                <h5>{todo.title}</h5>
                <span>{todo.description}</span>
              </S.TodoItem>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedTodo && (
              <TodoListViewTodoModal
                todoData={selectedTodo}
                onCancel={() => setSelectedTodo(null)}
                onRemove={removeTodo}
              />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </S.TodoList>
    </S.Container>
  );
};

export default React.memo(TodoList);
