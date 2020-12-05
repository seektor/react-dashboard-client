import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { Header, Icon } from "semantic-ui-react";
import S from "./TodoItem.styled";

const TodoItem: FunctionComponent = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <S.Container>
        <S.HeaderContainer>
          <Header as="h4">Title</Header>
          <Icon name="edit" />
        </S.HeaderContainer>
        <p>Hello</p>
      </S.Container>
    </motion.div>
  );
};

export default TodoItem;
