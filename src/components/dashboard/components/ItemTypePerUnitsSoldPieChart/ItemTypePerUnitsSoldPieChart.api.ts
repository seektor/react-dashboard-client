import Axios, { AxiosResponse } from "axios";
import { API_SALES_AGGREGATES } from "../../../../constants/api.constants";
import { AggregationData } from "../../../../types/AggregationData";

const fetchItemTypePerUnitsSoldData = (): Promise<
  AxiosResponse<{
    data: AggregationData[];
  }>
> => {
  return Axios.get<{
    data: AggregationData[];
  }>(`${API_SALES_AGGREGATES}?value=units_sold&group_by=item_type`);
};

const ItemTypePerUnitsSoldPieChartApi = { fetchItemTypePerUnitsSoldData };

export default ItemTypePerUnitsSoldPieChartApi;
