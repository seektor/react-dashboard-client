import React, { FunctionComponent } from "react";
import Button from "../../../../shared/Button/Button";
import S from "./ChatAddMessage.styled";

interface ChatAddMessageProps {}

const ChatAddMessage: FunctionComponent<ChatAddMessageProps> = () => {
  return (
    <S.Container>
      <S.StyledTextInput
        placeholder="Type your message here..."
        onChange={() => {}}
      />
      <Button>Send</Button>
    </S.Container>
  );
};

export default ChatAddMessage;
