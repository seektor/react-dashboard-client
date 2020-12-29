import React, { FunctionComponent, useState } from "react";
import Button from "../../../../shared/Button/Button";
import S from "./ChatAddMessage.styled";

interface ChatAddMessageProps {
  onSendMessage: (message: string) => void;
}

const ChatAddMessage: FunctionComponent<ChatAddMessageProps> = ({
  onSendMessage,
}) => {
  const [message, setMessage] = useState<string>("");

  const onSendClick = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <S.Container>
      <S.StyledTextInput
        value={message}
        placeholder="Type your message here..."
        onChange={setMessage}
      />
      <Button disabled={!message} onClick={onSendClick}>
        Send
      </Button>
    </S.Container>
  );
};

export default ChatAddMessage;
