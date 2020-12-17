import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import io from "socket.io-client";
import { SocketEvents } from "../../../types/SocketEvents";
import Chat from "../components/Chat/Chat";
import SalesCountDisplay from "../components/SalesCountDisplay/SalesCountDisplay";
import TodoList from "../components/TodoList/TodoList";
import UsersCountDisplay from "../components/UsersCountDisplay/UsersCountDisplay";

interface DashboardContextData {
  socket: SocketIOClient.Socket | null;
}

export const DashboardContext = React.createContext<DashboardContextData>({
  socket: null,
});

const Dashboard: FunctionComponent = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    const socketClient = io("http://localhost:8000");
    setSocket(socketClient);
    socketClient.emit(SocketEvents.UserConnected, Date.now().toString());

    return () => {
      socketClient.disconnect();
    };
  }, []);

  const dashboardContextValue = useMemo(
    () => ({
      socket,
    }),
    [socket]
  );

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <div
        style={{
          display: "grid",
          height: "100%",
          gridTemplateColumns: "repeat(20, 1fr)",
          gridTemplateRows: "repeat(16, 1fr)",
          gap: "8px",
          padding: "8px",
        }}
      >
        <div
          style={{
            gridColumn: "1 / span 2",
            gridRow: "1 / span 2",
          }}
        >
          <UsersCountDisplay />
        </div>
        <div
          style={{
            gridColumn: "3 / span 2",
            gridRow: "1 / span 2",
          }}
        >
          <SalesCountDisplay />
        </div>

        <div
          style={{
            backgroundColor: "green",
            gridColumn: "1 / span 9",
            gridRow: "3 / span 10",
          }}
        >
          Table
        </div>

        <div
          style={{
            backgroundColor: "blue",
            gridColumn: "10 / span 8",
            gridRow: "3 / span 5",
          }}
        >
          Chart 1
        </div>
        <div
          style={{
            backgroundColor: "blue",
            gridColumn: "10 / span 8",
            gridRow: "8 / span 5",
          }}
        >
          Chart 2
        </div>

        <div
          style={{
            gridColumn: "18 / span 3",
            gridRow: "1 / span 16",
          }}
        >
          <TodoList />
        </div>

        <div
          style={{
            gridColumn: "1 / span 17",
            gridRow: "13 / span 4",
          }}
        >
          <Chat />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
