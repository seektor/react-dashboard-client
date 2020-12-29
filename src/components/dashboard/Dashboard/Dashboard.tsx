import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { RootState } from "../../../store/rootReducer";
import { SocketEvent } from "../../../types/SocketEvent";
import Chat from "../components/Chat/Chat";
import ItemTypePerUnitsSoldPieChart from "../components/ItemTypePerUnitsSoldPieChart/ItemTypePerUnitsSoldPieChart";
import SalesCountDisplay from "../components/SalesCountDisplay/SalesCountDisplay";
import SalesPerRegionBarChart from "../components/SalesPerRegionBarChart/SalesPerRegionBarChart";
import SalesTable from "../components/SalesTable/SalesTable";
import TodoList from "../components/TodoList/TodoList";
import UsersCountDisplay from "../components/UsersCountDisplay/UsersCountDisplay";
import S from "./Dashboard.styled";

interface DashboardContextData {
  socket: SocketIOClient.Socket | null;
}

const { REACT_APP_SOCKET_ENDPOINT } = process.env;

export const DashboardContext = React.createContext<DashboardContextData>({
  socket: null,
});

const Dashboard: FunctionComponent = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const userName = useSelector(
    (state: RootState) => state.authSlice.user?.userName
  );

  useEffect(() => {
    if (!REACT_APP_SOCKET_ENDPOINT) {
      throw new Error("Missing SOCKET_ENDPOINT in the env!");
    }
    const socketClient = io(REACT_APP_SOCKET_ENDPOINT);
    setSocket(socketClient);
    socketClient.emit(SocketEvent.UserConnected, userName);
    return () => {
      socketClient.disconnect();
    };
  }, [userName]);

  const dashboardContextValue = useMemo(
    () => ({
      socket,
    }),
    [socket]
  );

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <S.Grid>
        <S.UsersCountDisplayTile>
          <UsersCountDisplay />
        </S.UsersCountDisplayTile>

        <S.SalesCountDisplayTile>
          <SalesCountDisplay />
        </S.SalesCountDisplayTile>

        <S.SalesTableTile>
          <SalesTable />
        </S.SalesTableTile>

        <S.SalesPerRegionBarChartTile>
          <SalesPerRegionBarChart />
        </S.SalesPerRegionBarChartTile>

        <S.ItemTypePerUnitsSoldPieChartTile>
          <ItemTypePerUnitsSoldPieChart />
        </S.ItemTypePerUnitsSoldPieChartTile>

        <S.TodoListTile>
          <TodoList />
        </S.TodoListTile>

        <S.ChatTile>
          <Chat />
        </S.ChatTile>
      </S.Grid>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
