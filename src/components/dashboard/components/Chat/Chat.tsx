import React, { FunctionComponent } from "react";
import { Button, Header } from "semantic-ui-react";
import S from "./Chat.styled";

const Chat: FunctionComponent = () => {
  return (
    <S.Container>
      <Header as="h3">Chat</Header>
      <S.MsgList>
        <S.MsgList>
          <S.ServerMsg>=== Connection established ===</S.ServerMsg>
          <S.MsgContainer>
            <S.SelfMsgAuthor>Me: </S.SelfMsgAuthor>
            <S.Msg>Hello</S.Msg>
          </S.MsgContainer>
          <S.MsgContainer>
            <S.MsgAuthor>You: </S.MsgAuthor>
            <S.Msg>Badum</S.Msg>
          </S.MsgContainer>
        </S.MsgList>
      </S.MsgList>
      <S.InputRow>
        <S.StyledInput placeholder="Enter your message..." />
        <Button secondary>Send</Button>
      </S.InputRow>
    </S.Container>
  );
};

export default Chat;
