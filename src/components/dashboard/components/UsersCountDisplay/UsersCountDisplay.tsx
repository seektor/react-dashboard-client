import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { SocketEvent } from "../../../../types/SocketEvent";
import { DashboardContext } from "../../Dashboard/Dashboard";
import S from "./UsersCountDisplay.styled";

const UsersCountDisplay: FunctionComponent = () => {
  const { socket } = useContext(DashboardContext);
  const [usersCount, setUsersCount] = useState<number>(0);

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.on(SocketEvent.UserConnected, () =>
      setUsersCount((count) => count + 1)
    );
    socket.on(SocketEvent.UserDisconnected, () =>
      setUsersCount((count) => count - 1)
    );
    socket.once(SocketEvent.UsersCount, (count: number) =>
      setUsersCount(count)
    );
    socket.emit(SocketEvent.UsersCount);

    return () => {
      socket.off(SocketEvent.UserConnected);
      socket.off(SocketEvent.UserDisconnected);
    };
  }, [socket]);

  return (
    <S.Container>
      <S.HeaderTitle>Users online</S.HeaderTitle>
      <S.Value>{usersCount}</S.Value>
    </S.Container>
  );
};

export default React.memo(UsersCountDisplay);
