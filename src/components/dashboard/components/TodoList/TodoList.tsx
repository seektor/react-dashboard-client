import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { useAppDispatch } from "../../../../store/store";
import Button from "../../../shared/Button/Button";
import { ButtonSize } from "../../../shared/Button/Button.types";
import S from "./TodoList.styled";
import TodoListCreateFormModal from "./TodoListCreateFormModal/TodoListCreateFormModal";

const TodoList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [formOpened, setFormOpened] = React.useState(false);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderTitle>TODO</S.HeaderTitle>

        <AnimateSharedLayout type="switch">
          <motion.div layoutId="create-todo" layout={false}>
            <Button
              buttonSize={ButtonSize.Small}
              onClick={() => setFormOpened(true)}
            >
              Create
            </Button>
          </motion.div>

          <AnimatePresence>
            {formOpened && (
              <TodoListCreateFormModal onCancel={() => setFormOpened(false)} />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </S.HeaderContainer>

      <S.TodoList>
        <motion.div whileHover={{ scale: 1.1 }}>
          <S.TodoItem>
            <h5>Title</h5>
            <span>This is my first new todo</span>
          </S.TodoItem>
        </motion.div>
        <S.TodoItem>
          <h5>Title</h5>
          <span>
            This is my first new todo This is my first new todo This is my first
            new todo This is my first new todo This is my first new todo
          </span>
        </S.TodoItem>
        <S.TodoItem>
          <h5>Title</h5>
          <span>
            This is my first new todo This is my first new todo This is my first
            new todo This is my first new todo
          </span>
        </S.TodoItem>
      </S.TodoList>
    </S.Container>
  );
};

export default TodoList;
