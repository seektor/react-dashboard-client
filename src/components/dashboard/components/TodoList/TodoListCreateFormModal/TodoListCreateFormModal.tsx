import React, { FunctionComponent } from "react";
import Alert from "../../../../shared/Alert/Alert";
import { AlertType } from "../../../../shared/Alert/Alert.types";
import Button from "../../../../shared/Button/Button";
import { ButtonType } from "../../../../shared/Button/Button.types";
import Modal from "../../../../shared/Modal/Modal";
import TextArea from "../../../../shared/TextArea/TextArea";
import TextInput from "../../../../shared/TextInput/TextInput";
import S from "./TodoListCreateFormModal.styled";

interface TodoListCreateFormModalProps {
  onCancel: () => void;
}

const TodoListCreateFormModal: FunctionComponent<TodoListCreateFormModalProps> = ({
  onCancel,
}) => {
  return (
    <Modal layoutId="create-todo" onHide={onCancel}>
      <S.Container>
        <S.HeaderTitle>Create TODO</S.HeaderTitle>

        <S.Body>
          <Alert type={AlertType.Error}>Invalid field</Alert>
          <TextInput placeholder="Title" onChange={() => {}} />
          <TextArea placeholder="Content" rows={5} onChange={() => {}} />
        </S.Body>

        <S.Footer>
          <Button buttonType={ButtonType.Secondary} onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={() => {}}>Create</Button>
        </S.Footer>
      </S.Container>
    </Modal>
  );
};

export default TodoListCreateFormModal;
