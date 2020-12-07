import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { FunctionComponent, useEffect } from "react";
import { Button, Loader } from "semantic-ui-react";
import { showToast } from "../../../../store/slices/toasts/toastsSlice";
import { useAppDispatch } from "../../../../store/store";
import { ToastType } from "../../../../types/ToastType";
import TodoItem from "./TodoItem/TodoItem";
import S from "./TodoList.styled";

const TodoList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(showToast({ msg: "Will i work???", type: ToastType.Success }));
  }, [dispatch]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.StyledHeader as="h3">Todo</S.StyledHeader>
        <Loader active={true} inline size="small" />
        <Button primary size="tiny">
          Add
        </Button>
      </S.HeaderContainer>

      <S.TodoList>
        <TodoItem />
      </S.TodoList>

      <AnimateSharedLayout type="crossfade">
        <motion.div
          layoutId="expandable-card"
          style={{ display: "inline-block" }}
        >
          <Button onClick={() => setOpen(true)}>hhhhh</Button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="expandable-card"
              onClick={() => setOpen(false)}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "red",
                position: "absolute",
                top: "50px",
                left: "50px",
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "blue",
              position: "absolute",
              top: "200px",
              left: "200px",
            }}
          />
        )}
      </AnimatePresence>
    </S.Container>
  );
};

export default TodoList;
