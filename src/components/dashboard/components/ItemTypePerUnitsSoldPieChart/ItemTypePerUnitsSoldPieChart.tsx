import { ResponsivePie } from "@nivo/pie";
import React, { FunctionComponent, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { COLOR } from "../../../../styles/color.styled";
import { AggregationData } from "../../../../types/AggregationData";
import Alert from "../../../shared/Alert/Alert";
import { AlertType } from "../../../shared/Alert/Alert.types";
import ItemTypePerUnitsSoldPieChartApi from "./ItemTypePerUnitsSoldPieChart.api";
import S from "./ItemTypePerUnitsSoldPieChart.styled";

const ItemTypePerUnitsSoldPieChart: FunctionComponent = () => {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [chartData, setChartData] = useState<AggregationData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoadingData(true);
        setErrorMessage(null);
        const response = await ItemTypePerUnitsSoldPieChartApi.fetchItemTypePerUnitsSoldData();
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
      <S.Header>Item Type per Units Sold</S.Header>
      <S.ChartContainer>
        {loadingData && <Loader type="Oval" color={COLOR.DarkCornflowerBlue} />}

        {!loadingData && (
          <ResponsivePie
            data={chartData}
            id="aggregator"
            value="value"
            margin={{ top: 24, right: 0, bottom: 24, left: 0 }}
            valueFormat={(value) => `${(value / 1000000).toFixed(1)}M`}
            innerRadius={0.4}
            padAngle={1}
            cornerRadius={3}
          />
        )}

        {errorMessage && (
          <Alert type={AlertType.Error} title="Error" content={errorMessage} />
        )}
      </S.ChartContainer>
    </S.Container>
  );
};

export default React.memo(ItemTypePerUnitsSoldPieChart);
