import React, { FunctionComponent } from "react";
import Button from "../../../../shared/Button/Button";
import { ButtonType } from "../../../../shared/Button/Button.types";
import Modal from "../../../../shared/Modal/Modal";
import TextArea from "../../../../shared/TextArea/TextArea";
import { TodoData } from "../TodoList.types";
import S from "./TodoListViewTodoModal.styled";

interface TodoListViewTodoModalProps {
  todoData: TodoData;
  onRemove: () => Promise<void>;
  onCancel: () => void;
}

const TodoListViewTodoModal: FunctionComponent<TodoListViewTodoModalProps> = ({
  todoData,
  onRemove,
  onCancel,
}) => {
  return (
    <Modal layoutId={todoData.id} onHide={onCancel}>
      <S.Container>
        <S.HeaderTitle>{todoData.title}</S.HeaderTitle>

        <S.Body>
          <TextArea
            placeholder="Description"
            defaultValue={todoData.description}
            readOnly={true}
            rows={5}
          />
        </S.Body>

        <S.Footer>
          <Button buttonType={ButtonType.Secondary} onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onRemove}>Remove</Button>
        </S.Footer>
      </S.Container>
    </Modal>
  );
};

export default TodoListViewTodoModal;
