import Axios, { AxiosResponse } from "axios";
import { API_SALES_AGGREGATES } from "../../../../constants/api.constants";
import { AggregationData } from "../../../../types/AggregationData";

const fetchTotalProfitPerRegionData = (): Promise<
  AxiosResponse<{
    data: AggregationData[];
  }>
> =>
  Axios.get<{
    data: AggregationData[];
  }>(`${API_SALES_AGGREGATES}?group_by=region&value=total_profit`);

const SalesPerRegionBarChartApi = { fetchTotalProfitPerRegionData };

export default SalesPerRegionBarChartApi;
