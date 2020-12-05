import React, { FunctionComponent } from "react";
import { Button, Loader } from "semantic-ui-react";
import S from "./TodoConfigurator.styled";
import TodoItem from "./TodoItem/TodoItem";

const TodoConfigurator: FunctionComponent = () => {
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
    </S.Container>
  );
};

export default TodoConfigurator;
