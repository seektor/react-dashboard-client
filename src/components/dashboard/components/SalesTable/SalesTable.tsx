import React, { FunctionComponent, useEffect } from "react";
import SalesAPi from "./SalesTable.api";

const SalesTable: FunctionComponent = () => {
  useEffect(() => {
    SalesAPi.fetchSales();
  }, []);
  return <div></div>;
};

export default SalesTable;
