import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/rootReducer";
import { SocketEvent } from "../../../../types/SocketEvent";
import { DashboardContext } from "../../Dashboard/Dashboard";
import S from "./Chat.styled";
import { ChatMessageData } from "./Chat.types";
import { renderMessage } from "./Chat.utils";
import ChatAddMessage from "./ChatAddMessage/ChatAddMessage";

const Chat: FunctionComponent = () => {
  const { socket } = useContext(DashboardContext);
  const [messagesData, setMessagesData] = useState<ChatMessageData[]>([]);
  const userName = useSelector(
    (state: RootState) => state.authSlice.user?.userName
  );

  const sendMessage = (message: string) => {
    socket?.emit(SocketEvent.UserMessage, { userName, message });
  };

  useEffect(() => {
    if (!socket) {
      return;
    }
    console.log("effect");
    socket.on(
      SocketEvent.UserMessage,
      ({ userName, message }: { userName: string; message: string }) =>
        setMessagesData((messagesData) => [
          ...messagesData,
          {
            id: Date.now().toString(),
            message,
            author: userName,
          },
        ])
    );
    return () => {
      socket.off(SocketEvent.UserMessage);
    };
  }, [socket]);

  return (
    <S.Container>
      <S.HeaderTitle>Chat</S.HeaderTitle>

      <S.MessagesList>
        {messagesData.length === 0 && (
          <S.ServerMessage>No messages</S.ServerMessage>
        )}
        {messagesData.map((messageDate) => {
          return renderMessage(messageDate, messageDate.author === userName);
        })}
      </S.MessagesList>

      <ChatAddMessage onSendMessage={sendMessage} />
    </S.Container>
  );
};

export default React.memo(Chat);
