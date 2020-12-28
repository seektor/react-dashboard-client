import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
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

export const DashboardContext = React.createContext<DashboardContextData>({
  socket: null,
});

const Dashboard: FunctionComponent = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    // const socketClient = io("http://localhost:8000");
    // setSocket(socketClient);
    // socketClient.emit(SocketEvents.UserConnected, Date.now().toString());
    // return () => {
    //   socketClient.disconnect();
    // };
  }, []);

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
