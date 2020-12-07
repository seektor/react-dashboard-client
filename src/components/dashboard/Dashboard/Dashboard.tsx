import React, { FunctionComponent } from "react";
import Chat from "../components/Chat/Chat";
import SalesCountDisplay from "../components/SalesCountDisplay/SalesCountDisplay";
import TodoConfigurator from "../components/TodoConfigurator/TodoConfigurator";
import UsersCountDisplay from "../components/UsersCountDisplay/UsersCountDisplay";

const Dashboard: FunctionComponent = () => {
  return (
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
          backgroundColor: "orange",
          gridColumn: "5 / span 2",
          gridRow: "1 / span 2",
        }}
      ></div>

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
        <TodoConfigurator />
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
  );
};

export default Dashboard;
