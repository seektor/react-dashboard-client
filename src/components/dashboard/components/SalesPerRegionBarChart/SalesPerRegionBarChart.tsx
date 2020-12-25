import { ResponsiveBar } from "@nivo/bar";
import React, { FunctionComponent, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { COLOR } from "../../../../styles/color.styled";
import { AggregationData } from "../../../../types/AggregationData";
import { generateColor } from "../../../../utils/color.utils";
import Alert from "../../../shared/Alert/Alert";
import { AlertType } from "../../../shared/Alert/Alert.types";
import SalesPerRegionBarChartApi from "./SalesPerRegionBarChart.api";
import S from "./SalesPerRegionBarChart.styled";

const SalesPerRegionBarChart: FunctionComponent = () => {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [chartData, setChartData] = useState<AggregationData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoadingData(true);
        setErrorMessage(null);
        const response = await SalesPerRegionBarChartApi.fetchTotalProfitPerRegion();
        setChartData(response.data.data);
      } catch (error) {
        setErrorMessage(error.response?.data.message || error.message);
      }
      setLoadingData(false);
    };
    loadData();
  }, []);

  return (
    <S.Container>
      <S.Header>Total profit per region</S.Header>
      <S.ChartContainer>
        {loadingData && <Loader type="Oval" color={COLOR.DarkCornflowerBlue} />}

        {!loadingData && (
          <ResponsiveBar
            data={chartData}
            indexBy="aggregator"
            keys={["value"]}
            margin={{ top: 0, right: 0, bottom: 24, left: 50 }}
            colors={(d) => generateColor(d.index)}
            enableLabel={false}
            tooltip={({ indexValue, value }) => (
              <>
                {indexValue} - <strong>${(value / 1000000).toFixed(3)}M</strong>
              </>
            )}
            axisLeft={{
              format: (value) => `$${(value as number) / 1000000}M`,
            }}
            axisBottom={{
              format: (value) => {
                if (typeof value === "string") {
                  return value.length > 10 ? `${value.slice(0, 8)}...` : value;
                }
                return `${value}`;
              },
            }}
          />
        )}

        {errorMessage && (
          <Alert type={AlertType.Error} title="Error" content={errorMessage} />
        )}
      </S.ChartContainer>
    </S.Container>
  );
};

export default React.memo(SalesPerRegionBarChart);
