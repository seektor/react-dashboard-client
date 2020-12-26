import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import ItemTypePerUnitsSoldPieChart from "../components/ItemTypePerUnitsSoldPieChart/ItemTypePerUnitsSoldPieChart";
import SalesCountDisplay from "../components/SalesCountDisplay/SalesCountDisplay";
import SalesPerRegionBarChart from "../components/SalesPerRegionBarChart/SalesPerRegionBarChart";
import SalesTable from "../components/SalesTable/SalesTable";
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
      <div
        style={{
          display: "grid",
          height: "100%",
          gridTemplateColumns: "repeat(20, 1fr)",
          gridTemplateRows: "repeat(20, 1fr)",
          gap: "8px",
          padding: "8px",
          boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            gridColumn: "1 / span 3",
            gridRow: "1 / span 2",
          }}
        >
          {/* <UsersCountDisplay /> */}
        </div>
        <div
          style={{
            gridColumn: "4 / span 3",
            gridRow: "1 / span 2",
          }}
        >
          <SalesCountDisplay />
        </div>

        <S.SalesTable>
          <SalesTable />
        </S.SalesTable>

        <S.SalesPerRegionBarChartTile>
          <SalesPerRegionBarChart />
        </S.SalesPerRegionBarChartTile>

        <S.ItemTypePerUnitsSoldPieChartTile>
          <ItemTypePerUnitsSoldPieChart />
        </S.ItemTypePerUnitsSoldPieChartTile>

        {/*<div
          style={{
            backgroundColor: "blue",
            gridColumn: "10 / span 8",
            gridRow: "13 / 8 20",
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
          {/* <Chat /> */}
        {/* </div>  */}
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
