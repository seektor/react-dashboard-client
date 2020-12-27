import React, { FunctionComponent } from "react";
import S from "./Chat.styled";

const Chat: FunctionComponent = () => {
  //   const { socket } = useContext(DashboardContext);
  //   const [messagesData, setMessagesData] = useState<ChatMessageData[]>([]);
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
    </S.Container>
    // <S.Container>
    //   <Header as="h3">Chat</Header>
    //   <S.MsgList ref={msgListRef}>
    //     {messagesData.map((messageData) => {
    //       if (messageData.isServerMsg) {
    //         return renderServerMessage(messageData.id, messageData.message);
    //       }
    //       return renderClientMessage(
    //         messageData.id,
    //         "kek",
    //         messageData.message,
    //         false
    //       );
    //     })}
    //   </S.MsgList>
    //   <S.InputRow>
    //     <S.StyledInput placeholder="Enter your message..." />
    //     <Button secondary>Send</Button>
    //   </S.InputRow>
    // </S.Container>
  );
};

export default Chat;
