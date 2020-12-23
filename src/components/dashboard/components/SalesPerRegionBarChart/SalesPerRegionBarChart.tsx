import { ResponsiveBar } from "@nivo/bar";
import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import { SaleDTO } from "../../../../types/dto/SaleDTO";
import SalesTableApi from "../SalesTable/SalesTable.api";

const SalesPerRegionBarChart: FunctionComponent = () => {
  const [salesData, setSalesData] = useState<SaleDTO[]>([]);

  useEffect(() => {
    SalesTableApi.fetchSales().then((data) => setSalesData(data.data));
  }, []);

  const data = useMemo(() => {
    const obj = salesData.reduce(
      (prev, curr) => ({
        ...prev,
        [curr.region]: (prev[curr.region] || 0) + curr.totalProfit,
      }),
      {} as Record<string, number>
    );
    const final = Object.entries(obj).map((entry) => ({
      region: entry[0],
      totalProfit: entry[1],
    }));
    console.log(final);
    return final;
  }, [salesData]);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: 8,
      }}
    >
      <ResponsiveBar data={data} indexBy="region" keys={["totalProfit"]} />
    </div>
  );
};

export default SalesPerRegionBarChart;
