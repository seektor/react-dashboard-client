import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/rootReducer";
import S from "./Chat.styled";
import { ChatMessageData } from "./Chat.types";
import { renderMessage } from "./Chat.utils";
import ChatAddMessage from "./ChatAddMessage/ChatAddMessage";

const Chat: FunctionComponent = () => {
  //   const { socket } = useContext(DashboardContext);
  const [messagesData, setMessagesData] = useState<ChatMessageData[]>([]);
  const userName = useSelector(
    (state: RootState) => state.authSlice.user?.userName
  );
  //   const msgListRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     if (!socket) {
  //       return;
  //     }
  //     socket.on(SocketEvents.UserConnected, (socketUserName: string) =>
  //       setMessagesData((messagesData) => [
  //         ...messagesData,
  //         {
  //           id: Date.now().toString(),
  //           message: `${socketUserName} has joined  the channel.`,
  //           isServerMsg: true,
  //         },
  //       ])
  //     );
  //     socket.on(SocketEvents.userDisconnected, (socketUserName: string) =>
  //       setMessagesData((messagesData) => [
  //         ...messagesData,
  //         {
  //           id: Date.now().toString(),
  //           message: `${socketUserName} has left  the channel.`,
  //           isServerMsg: true,
  //         },
  //       ])
  //     );

  //     return () => {
  //       socket.off(SocketEvents.UserConnected);
  //       socket.off(SocketEvents.userDisconnected);
  //     };
  //   }, [socket]);

  //   useEffect(() => {
  //     if (msgListRef.current) {
  //       msgListRef.current.scrollTop =
  //         msgListRef.current.scrollHeight - msgListRef.current.clientHeight;
  //     }
  //   }, [messagesData]);

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

      <ChatAddMessage />
    </S.Container>
  );
};

export default React.memo(Chat);
