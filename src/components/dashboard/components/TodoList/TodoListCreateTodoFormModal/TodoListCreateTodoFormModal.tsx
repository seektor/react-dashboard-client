import React, { FunctionComponent, useState } from "react";
import Alert from "../../../../shared/Alert/Alert";
import { AlertType } from "../../../../shared/Alert/Alert.types";
import Button from "../../../../shared/Button/Button";
import { ButtonType } from "../../../../shared/Button/Button.types";
import Modal from "../../../../shared/Modal/Modal";
import TextArea from "../../../../shared/TextArea/TextArea";
import TextInput from "../../../../shared/TextInput/TextInput";
import S from "./TodoListCreateTodoFormModal.styled";

interface TodoListCreateTodoFormModalProps {
  onCreate: (title: string, description: string) => Promise<void>;
  onCancel: () => void;
}

const TodoListCreateTodoFormModal: FunctionComponent<TodoListCreateTodoFormModalProps> = ({
  onCreate,
  onCancel,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onCreateClick = () => {
    if (!title || !description) {
      setErrorMessage("Please enter all the fields!");
      return;
    }
    onCreate(title, description);
  };

  return (
    <Modal layoutId="create-todo" onHide={onCancel}>
      <S.Container>
        <S.HeaderTitle>Create TODO</S.HeaderTitle>

        <S.Body>
          {errorMessage && <Alert type={AlertType.Error}>{errorMessage}</Alert>}
          <TextInput
            placeholder="Title"
            value={title}
            onChange={setTitle}
            maxLength={50}
          />
          <TextArea
            placeholder="Description"
            value={description}
            rows={5}
            onChange={setDescription}
            maxLength={500}
          />
        </S.Body>

        <S.Footer>
          <Button buttonType={ButtonType.Secondary} onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onCreateClick}>Create</Button>
        </S.Footer>
      </S.Container>
    </Modal>
  );
};

export default TodoListCreateTodoFormModal;
